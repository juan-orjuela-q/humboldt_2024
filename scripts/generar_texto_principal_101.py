from __future__ import annotations

import re
import unicodedata
from pathlib import Path
from typing import List

from docx import Document


REPO_ROOT = Path(__file__).resolve().parents[1]
DOCX_PATH = REPO_ROOT / "contenido" / "ficha_101" / "input" / "101 Final.docx"
OUT_PATH = REPO_ROOT / "contenido" / "ficha_101" / "texto_principal101.html"

# Enlaces según lo solicitado
GLOSARIO_BASE = "https://reporte.humboldt.org.co/biodiversidad/glosario#"
REFERENCIAS_BASE = (
    "https://reporte.humboldt.org.co/biodiversidad/referencias.php?year=2024#"
)
FICHA_ID = "101"  # Ajustable si se requiere cambiar a otra ficha


def strip_accents(s: str) -> str:
    nfkd = unicodedata.normalize("NFD", s)
    return "".join(c for c in nfkd if unicodedata.category(c) != "Mn")


def slug_no_spaces(text: str) -> str:
    # El final del enlace es la misma palabra sin espacios ni caracteres especiales
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
    # Heurística para no convertir a referencia exponentes de unidades (km², m³, etc.)
    prev = (prev_text or "").strip().lower()
    sup = (sup_text or "").strip()
    if sup not in {"2", "3"}:
        return False
    # Si el texto anterior termina en unidades conocidas
    return bool(re.search(r"(km|m|cm|mm)$", prev))


def convert_runs_to_html(paragraph, ficha_id: str) -> str:
    parts: List[str] = []
    runs = paragraph.runs
    for idx, r in enumerate(runs):
        text = r.text or ""
        if text == "":
            continue
        prev_text = runs[idx - 1].text if idx > 0 else ""

        # Superíndices
        is_super = bool(getattr(r.font, "superscript", None))
        if is_super:
            if is_unit_superscript(prev_text, text):
                parts.append(f"<sup>{html_escape(text)}</sup>")
            else:
                # Enlazar a referencias con año 2024 y ancla por número de ficha
                href = f"{REFERENCIAS_BASE}{ficha_id}"
                num = re.sub(r"\D+", "", text) or html_escape(text)
                parts.append(f"<sup><a href=\"{href}\">{num}</a></sup>")
            continue

        # Negritas -> enlace a glosario con slug sin espacios ni caracteres especiales
        if bool(r.bold):
            slug = slug_no_spaces(text)
            href = f"{GLOSARIO_BASE}{slug}"
            parts.append(f"<a href=\"{href}\">{html_escape(text)}</a>")
            continue

        # Texto normal
        parts.append(html_escape(text))

    return "".join(parts).strip()


def main():
    if not DOCX_PATH.exists():
        print(f"No se encontró el archivo DOCX: {DOCX_PATH}")
        return

    doc = Document(DOCX_PATH)
    out_paragraphs: List[str] = []

    # Encontrar sección entre 'Cuerpo' y 'Fichas relacionadas'
    capture = False
    for p in doc.paragraphs:
        raw = (p.text or "").strip()
        raw_norm = strip_accents(raw).lower()
        if raw_norm == "cuerpo":
            capture = True
            continue
        if raw_norm == "fichas relacionadas":
            break
        if not capture:
            continue

        html_line = convert_runs_to_html(p, FICHA_ID)
        if html_line:
            out_paragraphs.append(f"<p>{html_line}</p>")

    # Guardar sólo el bloque de <p>, sin encabezado ni <body>
    content = "\n".join(out_paragraphs) + ("\n" if out_paragraphs else "")
    OUT_PATH.write_text(content, encoding="utf-8")
    print(f"[ok] Generado: {OUT_PATH.relative_to(REPO_ROOT)}")


if __name__ == "__main__":
    main()
