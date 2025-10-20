from __future__ import annotations

import re
import unicodedata
from pathlib import Path
from typing import List, Optional

from docx import Document


REPO_ROOT = Path(__file__).resolve().parents[1]
CONTENIDO_DIR = REPO_ROOT / "contenido"

GLOSARIO_BASE = "https://reporte.humboldt.org.co/biodiversidad/glosario#"
REFERENCIAS_BASE = (
    "https://reporte.humboldt.org.co/biodiversidad/referencias.php?year=2024#"
)


def strip_accents(s: str) -> str:
    nfkd = unicodedata.normalize("NFD", s)
    return "".join(c for c in nfkd if unicodedata.category(c) != "Mn")


def slug_no_spaces(text: str) -> str:
    t = strip_accents(text)
    t = re.sub(r"[^A-Za-z0-9]", "", t)
    return t.lower()


def html_escape(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
        .replace("'", "&#39;")
    )


def is_unit_superscript(prev_text: str, sup_text: str) -> bool:
    prev = (prev_text or "").strip().lower()
    sup = (sup_text or "").strip()
    if sup not in {"2", "3"}:
        return False
    return bool(re.search(r"(km|m|cm|mm)$", prev))


def runs_to_html_paragraph(paragraph, ficha_id: str) -> str:
    parts: List[str] = []
    runs = paragraph.runs
    for idx, r in enumerate(runs):
        text = r.text or ""
        if text == "":
            continue
        prev_text = runs[idx - 1].text if idx > 0 else ""

        is_super = bool(getattr(r.font, "superscript", None))
        if is_super:
            if is_unit_superscript(prev_text, text):
                parts.append(f"<sup>{html_escape(text)}</sup>")
            else:
                href = f"{REFERENCIAS_BASE}{ficha_id}"
                num = re.sub(r"\D+", "", text) or html_escape(text)
                parts.append(f"<sup><a href=\"{href}\">{num}</a></sup>")
            continue

        if bool(r.bold):
            slug = slug_no_spaces(text)
            href = f"{GLOSARIO_BASE}{slug}"
            parts.append(f"<a href=\"{href}\">{html_escape(text)}</a>")
            continue

        # Cursivas (nombres científicos en el Word original) -> <em>
        if bool(r.italic):
            parts.append(f"<em>{html_escape(text)}</em>")
            continue

        # Texto normal
        parts.append(html_escape(text))

    return "".join(parts).strip()


def find_docx_for_ficha(ficha_dir: Path, ficha_id: str) -> Optional[Path]:
    input_dir = ficha_dir / "input"
    if not input_dir.exists():
        return None
    # Preferir "<ID> Final*.docx" si existe
    preferred = sorted(input_dir.glob(f"{ficha_id}*Final*.docx"))
    if preferred:
        return preferred[0]
    # Si no, tomar el primer .docx
    any_docx = sorted(input_dir.glob("*.docx"))
    return any_docx[0] if any_docx else None


def process_ficha(ficha_dir: Path) -> Optional[Path]:
    m = re.search(r"(\d+)", ficha_dir.name)
    if not m:
        print(f"[skip] No ID en {ficha_dir}")
        return None
    ficha_id = m.group(1)

    docx_path = find_docx_for_ficha(ficha_dir, ficha_id)
    if not docx_path:
        print(f"[omitida] Sin DOCX en {ficha_dir / 'input'}")
        return None

    doc = Document(docx_path)

    capturing = False
    out_lines: List[str] = []
    for p in doc.paragraphs:
        raw = (p.text or "").strip()
        raw_norm = strip_accents(raw).lower()
        if raw_norm == "cuerpo":
            capturing = True
            continue
        if raw_norm == "fichas relacionadas":
            break
        if not capturing:
            continue
        line = runs_to_html_paragraph(p, ficha_id)
        if line:
            out_lines.append(f"<p>{line}</p>")

    if not out_lines:
        print(f"[vacia] No se encontraron párrafos entre Cuerpo y Fichas relacionadas en {docx_path.name}")
        return None

    out_path = ficha_dir / f"texto_principal{ficha_id}.html"
    out_path.write_text("\n".join(out_lines) + "\n", encoding="utf-8")
    print(f"[ok] {docx_path.name} -> {out_path.relative_to(REPO_ROOT)}")
    return out_path


def main():
    total = 0
    for ficha_dir in sorted(CONTENIDO_DIR.glob("ficha_*")):
        res = process_ficha(ficha_dir)
        if res:
            total += 1
    print(f"Listo: {total} fichas generadas.")


if __name__ == "__main__":
    main()
