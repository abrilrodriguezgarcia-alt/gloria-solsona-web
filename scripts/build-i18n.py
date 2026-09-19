#!/usr/bin/env python3
"""
Genera les pàgines en castellà (/es/) a partir de les pàgines en català,
aplicant les traduccions de src/i18n/es.json.

Fa servir BeautifulSoup per operar sobre el DOM (nodes de text i atributs)
en lloc de fer un replace de text pla sobre el fitxer sencer: així cap
traducció es perd per diferències d'espais o salts de línia entre el
diccionari i el codi font.

Ús:
    python3 scripts/build-i18n.py

Per canviar una traducció: edita src/i18n/es.json i torna a executar
aquest script. No editis mai els fitxers dins de es/ a mà — es
sobreescriuen cada vegada.
"""
import json
import re
from pathlib import Path

from bs4 import BeautifulSoup, Comment, NavigableString

ROOT = Path(__file__).resolve().parent.parent
I18N_PATH = ROOT / "src/i18n/es.json"

PAGES = [
    (ROOT / "index.html", ROOT / "es/index.html"),
    (ROOT / "legal/avis-legal.html", ROOT / "es/legal/aviso-legal.html"),
    (ROOT / "legal/privacitat.html", ROOT / "es/legal/privacidad.html"),
    (ROOT / "legal/cookies.html", ROOT / "es/legal/cookies.html"),
]

# Enllaços interns que canvien de destí a la versió ES (assets, àncores de
# secció i enllaços externs es deixen tal qual: els assets són absoluts des
# de l'arrel del `publicDir` i no depenen de l'idioma; els enllaços de
# navegació fan servir el placeholder %BASE_URL% de Vite perquè funcionin
# tant en local com desplegats a un subdirectori, p. ex. GitHub Pages).
LINK_MAP = {
    "%BASE_URL%": "%BASE_URL%es/",
    "%BASE_URL%legal/avis-legal.html": "%BASE_URL%es/legal/aviso-legal.html",
    "%BASE_URL%legal/privacitat.html": "%BASE_URL%es/legal/privacidad.html",
    "%BASE_URL%legal/cookies.html": "%BASE_URL%es/legal/cookies.html",
}


def load_translations():
    data = json.loads(I18N_PATH.read_text(encoding="utf-8"))
    data.pop("_comment", None)
    # Claus més llargues primer perquè una frase sencera es tradueixi abans
    # que un fragment curt que hi estigui contingut (p. ex. "Contacte en
    # matèria de privacitat" abans que "Contacte").
    keys = sorted(data.keys(), key=len, reverse=True)
    pattern = re.compile("|".join(re.escape(k) for k in keys))
    return data, pattern


def translate(text, data, pattern):
    return pattern.sub(lambda m: data[m.group(0)], text)


def translate_text_node(node, data, pattern):
    original = str(node)
    if not original.strip():
        return
    normalized = " ".join(original.split())
    translated = translate(normalized, data, pattern)
    if translated == normalized:
        return
    leading = re.match(r"^\s*", original).group(0)
    trailing = re.search(r"\s*$", original).group(0)
    node.replace_with(NavigableString(leading + translated + trailing))


def translate_attr(tag, attr, data, pattern):
    if tag.has_attr(attr):
        value = tag[attr]
        translated = translate(value, data, pattern)
        if translated != value:
            tag[attr] = translated


def build_page(src_path, dst_path, data, pattern):
    soup = BeautifulSoup(src_path.read_text(encoding="utf-8"), "html.parser")

    soup.find("html")["lang"] = "es"

    for node in list(soup.find_all(string=True)):
        if isinstance(node, Comment):
            continue  # notes internes de desenvolupament: no formen part del contingut públic
        if node.parent.name in ("script", "style"):
            continue
        translate_text_node(node, data, pattern)

    for attr in ("alt", "aria-label", "title"):
        for tag in soup.find_all(attrs={attr: True}):
            translate_attr(tag, attr, data, pattern)

    for tag in soup.find_all("meta", attrs={"name": "description"}):
        translate_attr(tag, "content", data, pattern)

    for a in soup.find_all("a", href=True):
        if "lang-switch__link" in (a.get("class") or []):
            continue  # el selector d'idioma ja porta el href correcte des de l'origen
        if a["href"] in LINK_MAP:
            a["href"] = LINK_MAP[a["href"]]

    # Selector d'idioma: a la pàgina ES, l'enllaç actiu ha de ser ES, no CA.
    for link in soup.select(".lang-switch__link"):
        classes = [c for c in link.get("class", []) if c != "lang-switch__link--active"]
        if link.get("lang") == "es":
            classes.append("lang-switch__link--active")
            link["aria-current"] = "page"
        elif link.has_attr("aria-current"):
            del link["aria-current"]
        link["class"] = classes

    dst_path.parent.mkdir(parents=True, exist_ok=True)
    dst_path.write_text(str(soup), encoding="utf-8")
    print(f"  {src_path.relative_to(ROOT)} -> {dst_path.relative_to(ROOT)}")


def main():
    data, pattern = load_translations()
    print("Generant pàgines en castellà...")
    for src_path, dst_path in PAGES:
        build_page(src_path, dst_path, data, pattern)
    print("Fet.")


if __name__ == "__main__":
    main()
