# 🏞️ Rutes Cara Nord

Una web pensada per a persones interessades en fer rutes de senderisme al Parc Natural dels Ports. L’objectiu és fomentar el turisme responsable, la connexió amb la natura i donar a conèixer els pobles i paisatges d’aquest entorn privilegiat. 🌿👣

---

## 1️⃣ Tema i motivació

Aquesta web sorgeix de la meva passió per la natura i el senderisme, i especialment pel Parc Natural dels Ports. 🌄

L’objectiu és crear una eina clara i funcional per a excursionistes, famílies o persones que volen descobrir el territori. Està directament vinculada amb la Geografia, ja que treballa:

- L’ús del territori i el paisatge.
- El coneixement dels espais naturals protegits.
- La planificació territorial i la cartografia.
- La geolocalització i l'accessibilitat de recursos digitals.

---

## 2️⃣ Dades i continguts

📸 **Fotos:** Realitzades per mi o extretes de fonts lliures (Pixabay, Unsplash) o del meu arxiu personal.

📝 **Textos:** Redactats íntegrament per mi, basats en coneixements geogràfics, experiències personals i materials d'estudi.

🗺️ **Mapes:** Elaborats a partir de dades pròpies mitjançant QGIS i exportats com a mapa interactiu amb el plugin qgis2web (Leaflet).

🎨 **Estil:** Personalitzat amb CSS i posterior adaptació amb el framework Bootstrap 5.

---

## 3️⃣ Estructura de la web

La web inclou les següents seccions:

- **Inici:** presentació i vídeo del parc 🌿
- **Sobre nosaltres:** equip de guies 🌟
- **Rutes:** mapa interactiu i galeria de fotos 🗺️📷
- **Calendari:** inscripcions a activitats amb control de places 📆
- **Pobles:** fitxes dels municipis més rellevants 🏘️
- **Contacte:** formulari i FAQ ✉️

📋 S’han utilitzat:
- Llistes amb icones per facilitar la lectura.
- Taules per gestionar inscripcions.
- Seccions separades visualment amb colors i marges.
- Responsive layout adaptat a Bootstrap per facilitar la lectura en tots els dispositius.

---

## 4️⃣ Web responsive 📱💻

Per fer la web responsive s’ha utilitzat el framework **Bootstrap 5**, aprofitant:

- El sistema de columnes (`row`, `col-md-6`...) 🧱
- Classes per a marges i espaiats (`mb-3`, `p-4`...)
- Botons adaptatius (`btn`, `btn-success`) 🎯
- Menú responsive amb `navbar-expand-md` i `collapse` 🍔
- Imatges adaptades amb `.img-fluid` 🖼️

A més, s'han fet ajustos amb CSS personalitzat per millorar compatibilitat i estètica.

---

## 5️⃣ Cartografia 🗺️

Els mapes han estat creats amb **QGIS**, utilitzant:

- Capes de línies per a les rutes.
- Dades pròpies georeferenciades.
- Exportació amb **qgis2web** per generar un mapa Leaflet.

El mapa mostra:
- Rutes amb nivells de dificultat (color diferent).
- Informació emergent al clicar sobre cada ruta (popup).
- Visualització adaptada a mòbil.

---

## 6️⃣ Dificultats i millores 💡

### Dificultats trobades:
- Integració inicial del mapa Leaflet.
- Canvi de codi personalitzat a Bootstrap.
- Control de places en inscripcions (JS dinàmic).

### Possibles millores futures:
- Afegir base de dades per gestionar inscripcions amb PHP/MySQL.
- Més filtres i categories de rutes.
- Galeria amb lightbox i fitxes descarregables en PDF.
- Traducció a diversos idiomes 🌍

---

## 🚀 Gràcies per visitar **Rutes Cara Nord**!

Si tens suggeriments, dubtes o vols fer una ruta amb nosaltres, escriu-nos! 📩