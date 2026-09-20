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
#
# Les mateixes parelles CA -> ES serveixen per a `canonical`/`og:url`
# (Fase 2 SEO, 2026-09-20), que fan servir el domini de treball
# gloriasolsona.cat (a confirmar, docs/seo-plan.md) en lloc de %BASE_URL%
# perquè aquestes etiquetes requereixen una URL absoluta.
LINK_MAP = {
    "%BASE_URL%": "%BASE_URL%es/",
    "%BASE_URL%legal/avis-legal.html": "%BASE_URL%es/legal/aviso-legal.html",
    "%BASE_URL%legal/privacitat.html": "%BASE_URL%es/legal/privacidad.html",
    "%BASE_URL%legal/cookies.html": "%BASE_URL%es/legal/cookies.html",
    "https://gloriasolsona.cat/": "https://gloriasolsona.cat/es/",
    "https://gloriasolsona.cat/legal/avis-legal.html": "https://gloriasolsona.cat/es/legal/aviso-legal.html",
    "https://gloriasolsona.cat/legal/privacitat.html": "https://gloriasolsona.cat/es/legal/privacidad.html",
    "https://gloriasolsona.cat/legal/cookies.html": "https://gloriasolsona.cat/es/legal/cookies.html",
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


# Claus de l'objecte JSON-LD (schema.org) que porten text humà traduïble
# amb el mateix diccionari que la resta de la pàgina. Deliberadament NO hi
# ha "identifier", "credentialCategory", "@type", "telephone", "email" ni
# cap component de l'adreça: són dades/codis, no text narratiu, i no s'han
# de tocar mai (ni falta que fa: no coincideixen amb cap clau del
# diccionari, però es deixen fora de la llista per claredat i seguretat).
LD_JSON_TRANSLATE_KEYS = {"name", "description", "jobTitle"}


def translate_json_ld_node(node, data, pattern):
    """Tradueix in-place un node JSON-LD (dict/list ja parsejat amb json.loads).

    `@id` mai es toca (ha de ser idèntic entre la versió CA i ES: és la
    mateixa entitat real). `url` es remapeja amb LINK_MAP (autoreferencial,
    cada pàgina apunta a la seva pròpia URL). `inLanguage` s'intercanvia
    ca/es. La resta de claus de LD_JSON_TRANSLATE_KEYS es tradueixen amb el
    diccionari general; "knowsAbout" (llista de text) rep el mateix
    tractament element a element. Qualsevol altra clau (adreça, telèfon,
    hores, identificadors...) es deixa intacta.
    """
    if isinstance(node, dict):
        for key, value in node.items():
            if key == "@id":
                continue
            if key == "url" and isinstance(value, str):
                if value in LINK_MAP:
                    node[key] = LINK_MAP[value]
                continue
            if key == "inLanguage" and value == "ca":
                node[key] = "es"
                continue
            if key in LD_JSON_TRANSLATE_KEYS and isinstance(value, str):
                node[key] = translate(value, data, pattern)
                continue
            if key == "knowsAbout" and isinstance(value, list):
                node[key] = [
                    translate(item, data, pattern) if isinstance(item, str) else item
                    for item in value
                ]
                continue
            if isinstance(value, (dict, list)):
                translate_json_ld_node(value, data, pattern)
    elif isinstance(node, list):
        for item in node:
            translate_json_ld_node(item, data, pattern)


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

    # og:title / og:description tenen el mateix text que <title>/meta
    # description (o el reutilitzen literalment a les pàgines legals): es
    # tradueixen amb el mateix diccionari.
    for tag in soup.find_all("meta", attrs={"property": "og:title"}):
        translate_attr(tag, "content", data, pattern)
    for tag in soup.find_all("meta", attrs={"property": "og:description"}):
        translate_attr(tag, "content", data, pattern)

    # og:locale (i el seu alternate) no és un fragment de text traduïble
    # pel diccionari: és un codi fix que s'intercanvia entre els dos idiomes.
    for tag in soup.find_all("meta", attrs={"property": "og:locale"}):
        if tag.get("content") == "ca_ES":
            tag["content"] = "es_ES"
    for tag in soup.find_all("meta", attrs={"property": "og:locale:alternate"}):
        if tag.get("content") == "es_ES":
            tag["content"] = "ca_ES"

    # canonical i og:url són autoreferencials: a la pàgina ES han d'apuntar
    # a la seva pròpia URL ES, no a la CA d'origen (LINK_MAP, mateix criteri
    # que als <a href>). Els <link rel="alternate" hreflang="..."> NO es
    # toquen aquí: han de llistar el mateix parell CA/ES a totes dues
    # pàgines, no "traduir-se".
    for link in soup.find_all("link"):
        rel = link.get("rel")
        if rel in ("canonical", ["canonical"]) and link.get("href") in LINK_MAP:
            link["href"] = LINK_MAP[link["href"]]
    for tag in soup.find_all("meta", attrs={"property": "og:url"}):
        if tag.get("content") in LINK_MAP:
            tag["content"] = LINK_MAP[tag["content"]]

    # Dades estructurades (JSON-LD): mateix tractament que la resta de
    # metadades SEO, però el contingut viu dins d'un <script> (exclòs del
    # bucle general de nodes de text de més amunt) i cal parsejar-lo/
    # reserialitzar-lo com a JSON en lloc de tocar text pla.
    ld_json_script = soup.find("script", attrs={"type": "application/ld+json"})
    if ld_json_script and ld_json_script.string:
        ld_data = json.loads(ld_json_script.string)
        translate_json_ld_node(ld_data, data, pattern)
        ld_json_script.string = json.dumps(ld_data, ensure_ascii=False, indent=2)

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
