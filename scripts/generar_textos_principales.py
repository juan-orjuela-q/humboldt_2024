"""
Genera texto_principal<ID>.html a partir del DOCX en contenido/ficha_<ID>/input/.

- Negritas -> <strong><a href="{GLOSARIO_BASE}#slug">...</a></strong>
- Superíndices -> <sup><a href="{REFERENCIAS_BASE}#{ID}">n</a></sup>

Configuración de enlaces basada en 'general/Modelos de enlaces.txt':
- Referencias: https://reporte.humboldt.org.co/biodiversidad/referencias.php?year=2023#<ID>
- Glosario:   https://reporte.humboldt.org.co/biodiversidad/glosario#<slug>

Ejecutar desde la raíz del repo:
    C:/Users/juana/AppData/Local/Programs/Python/Python312/python.exe scripts/generar_textos_principales.py
"""

from __future__ import annotations

import re
import unicodedata
from pathlib import Path
from typing import Optional

from docx import Document


REPO_ROOT = Path(__file__).resolve().parents[1]
CONTENIDO_DIR = REPO_ROOT / "contenido"

# Bases de URL (ajustables si cambia el año o la ruta del sitio)
REFERENCIAS_BASE = (
    "https://reporte.humboldt.org.co/biodiversidad/referencias.php?year=2023"
)
GLOSARIO_BASE = "https://reporte.humboldt.org.co/biodiversidad/glosario"


def slugify(text: str) -> str:
    """Convierte texto a slug: minusculas, sin acentos, espacios -> guiones."""
    # Normalizar y remover acentos
    nfkd = unicodedata.normalize("NFD", text)
    no_accents = "".join(c for c in nfkd if unicodedata.category(c) != "Mn")
    # Mantener alfanum, espacios y guiones
    cleaned = re.sub(r"[^a-zA-Z0-9\s-]", "", no_accents)
    # Espacios a guiones, colapsar múltiples
    slug = re.sub(r"\s+", "-", cleaned.strip().lower())
    return slug


def is_list_paragraph(p) -> bool:
    """Detecta si el párrafo pertenece a una lista (viñetas o numerada)."""
    # 1) Por nombre de estilo común
    style_name = (getattr(p.style, "name", "") or "").lower()
    if "list" in style_name or "bullet" in style_name:
        return True
    # 2) Por numeración interna de Word
    try:
        pPr = p._p.pPr  # type: ignore[attr-defined]
        if pPr is not None and pPr.numPr is not None:  # type: ignore[attr-defined]
            return True
    except Exception:
        pass
    return False


def run_to_html(r, ficha_id: str) -> str:
    text = r.text or ""
    if text == "":
        return ""

    # Superíndices -> referencias de la ficha
    try:
        is_super = bool(getattr(r.font, "superscript", None))
    except Exception:
        is_super = False
    if is_super:
        # Extraer número visible (si aplica). Si no hay dígitos, usar texto crudo.
        m = re.findall(r"\d+", text)
        disp = m[0] if m else text
        return f'<sup><a href="{REFERENCIAS_BASE}#{ficha_id}">{disp}</a></sup>'

    # Negritas -> glosario
    if bool(r.bold):
        slug = slugify(text)
        return f'<strong><a href="{GLOSARIO_BASE}#{slug}">{html_escape(text)}</a></strong>'

    # Cursivas (opcional)
    if bool(r.italic):
        return f"<em>{html_escape(text)}</em>"

    # Normal
    return html_escape(text)


def paragraph_to_html(p, ficha_id: str) -> tuple[str, str]:
    """Convierte un párrafo a HTML. Devuelve (html, tipo) donde tipo es 'p' o 'li'."""
    runs_html = "".join(run_to_html(r, ficha_id) for r in p.runs)
    # Si tras procesar queda vacío, retornar cadena vacía
    if runs_html.strip() == "":
        return "", "empty"
    if is_list_paragraph(p):
        return f"<li>{runs_html}</li>", "li"
    return f"<p>{runs_html}</p>", "p"


def html_escape(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
        .replace("'", "&#39;")
    )


def build_html_document(body: str, ficha_id: str) -> str:
    title = f"Texto principal {ficha_id}"
    return (
        "<!doctype html>\n"
        "<html lang=\"es\">\n"
        "<head>\n"
        "  <meta charset=\"utf-8\">\n"
        f"  <title>{title}</title>\n"
        "</head>\n"
        "<body>\n"
        f"{body}\n"
        "</body>\n"
        "</html>\n"
    )


def find_docx(input_dir: Path) -> Optional[Path]:
    candidates = sorted(input_dir.glob("*.docx"))
    return candidates[0] if candidates else None


def ficha_id_from_dir(fdir: Path) -> str:
    m = re.search(r"(\d+)", fdir.name)
    return m.group(1) if m else ""


def convert_ficha(ficha_dir: Path) -> Optional[Path]:
    ficha_id = ficha_id_from_dir(ficha_dir)
    if not ficha_id:
        print(f"[skip] No se pudo inferir ID en {ficha_dir}")
        return None

    input_dir = ficha_dir / "input"
    docx_path = find_docx(input_dir)
    if not docx_path:
        print(f"[omitida] No hay .docx en {input_dir}")
        return None

    doc = Document(docx_path)
    parts: list[str] = []
    list_open = False
    for p in doc.paragraphs:
        html_piece, kind = paragraph_to_html(p, ficha_id)
        if not html_piece:
            continue
        if kind == "li":
            if not list_open:
                parts.append("<ul>")
                list_open = True
            parts.append(html_piece)
        elif kind == "p":
            if list_open:
                parts.append("</ul>")
                list_open = False
            parts.append(html_piece)

    if list_open:
        parts.append("</ul>")

    body = "\n".join(parts)
    html_doc = build_html_document(body, ficha_id)

    out_path = ficha_dir / f"texto_principal{ficha_id}.html"
    out_path.write_text(html_doc, encoding="utf-8")
    print(f"[ok] {docx_path.name} -> {out_path.relative_to(REPO_ROOT)}")
    return out_path


def main():
    # Procesar todas las fichas presentes
    count = 0
    for fdir in sorted(CONTENIDO_DIR.glob("ficha_*")):
        if not (fdir / "input").exists():
            continue
        res = convert_ficha(fdir)
        if res:
            count += 1
    print(f"Listo: {count} fichas convertidas.")


if __name__ == "__main__":
    main()
