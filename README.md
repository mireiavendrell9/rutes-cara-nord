**🏞️ Rutes Cara Nord**

Rutes Cara Nord és una pàgina web creada per promoure el senderisme al Parc Natural dels Ports, un dels espais naturals més emblemàtics del sud de Catalunya. Aquesta plataforma ofereix informació sobre rutes, pobles, activitats i recomanacions, amb una clara voluntat de divulgació geogràfica i educativa.

⸻

**1⃣⃣ Tema i motivació**

El projecte neix de la passió per la natura, la muntanya i l’educació ambiental. Com a estudiant de Geografia, he volgut aplicar coneixements tècnics, cartogràfics i comunicatius per fer arribar aquest patrimoni natural al públic.

Aquesta web pretén:

- Fomentar el respecte pel medi ambient.

- Posar en valor els pobles rurals de l’entorn.

- Contribuir al turisme local sostenible.

- Servir com a recurs per a estudiants i visitants.

⸻

**2⃣⃣ Dades i continguts**

__Fonts d’informació:__
- Textos propis basats en coneixements del Grau de Geografia i del cicle d’Educació Ambiental.

- Informació complementària obtinguda de fonts oficials com el Parc Natural dels Ports.

__Eines utilitzades:__
- QGIS per a la creació de les capes de rutes i punts.

- Leaflet i qgis2web per crear el mapa interactiu exportable.

- HTML, CSS, JS i Bootstrap per al desenvolupament web.

- Visual Studio Code com a entorn de programació principal.

- GitHub per allotjar la web i gestionar el control de versions,Git s’ha utilitzat per fer seguiment dels canvis, revertir errors i col·laborar de forma estructurada.

⸻

**3⃣⃣ Estructura de la web**

La web està estructurada de forma clara i bastant intuïtiva:

**Seccions de la web:**

- **Inici**: Presentació visual i missatge d’introducció amb vídeo integrat.
- **Sobre nosaltres**: Presentació de l’equip amb especialitats i frases personals.
- **Rutes**: Mapa interactiu, galeria fotogràfica i itineraris.
- **Calendari**: Taula d’activitats amb botó d’inscripció, informació per ruta i control d’aforament.
- **Pobles**: Fitxes descriptives de municipis.
- **Contacte**: Formulari de contacte + Preguntes Freqüents. 

⸻

**4⃣⃣ Web responsive i accessibilitat**

La web ha estat pensada per adaptar-se correctament a tot tipus de dispositius, fent ús de:

- Sistema de graelles de Bootstrap 5: una estructura basada en columnes que facilita el disseny flexible.

- Imatges .img-fluid: que s’adapten a la mida de la pantalla.

- Menú responsive (hamburguesa 🍔): utilitza les classes collapse i navbar-toggler per mostrar un menú plegable a dispositius petits.

- Classes com container, row, col-md-6, d-flex: per organitzar el contingut amb flexibilitat i alineació correcta.

- aria-labels i etiquetatge: atributs HTML que ajuden als lectors de pantalla a interpretar correctament la interfície .

__També s’han aplicat bones pràctiques com:__

- Contrastos adequats entre text i fons.

- alt a les imatges, que proporciona una descripció alternativa per a persones amb dificultats visuals.

- Transicions suaus (hover, scroll) que milloren l’experiència d’usuari.

⸻

**5⃣⃣ Cartografia i mapa interactiu**

El mapa ha estat elaborat amb QGIS i exportat mitjançant qgis2web, permetent visualització amb Leaflet.js. Aquest inclou:

- Capes de rutes codificades per dificultat: color verd (fàcil), morat (moderada), vermell (difícil).

- Pop-ups amb informació de cada itinerari: descripció, durada i dificultat.

- Base cartogràfica: ESRI World Topo, Ortofoto de Catalunya (ICC), Google Satellite Hybrid.

- Capa de punts amb pobles i icones personalitzades.

- Llegenda integrada que explica el significat dels colors i icones.

- Mapa centrat segons dispositiu: adaptació de la vista inicial en funció de la mida de pantalla per facilitar la navegació.

⸻

**6⃣⃣ Dificultats, aprenentatges i millores futures**

__🔧 Dificultats:__

- Integració del mapa a la web (paths relatius, gestió d’arxius locals i estructura de carpetes).

- Adaptació dels estils propis als components predefinits de Bootstrap.

__📚 Aprenentatges:__
- Comprensió del DOM (Document Object Model): estructura jeràrquica dels elements HTML que es pot modificar dinàmicament amb JavaScript.

- Gestió d’esdeveniments com clicks, submit o scroll amb JS per millorar la interactivitat.

- Domini bàsic de Bootstrap: creació de dissenys responsive, menús, formularis i botons amb codi senzill.

- Elaboració i integració d’un mapa interactiu propi, on les capes i les dades visuals han estat generades des de zero amb eines SIG.

__🚀 Millores futures:__
- Crear un panell d’administració per gestionar activitats i inscripcions de forma segura.

- Afegir fitxes descarregables en PDF i GPX per a cada ruta amb dades tècniques i consells útils.

- Traducció multilingüe de la web automàticament (anglès, francès…) per fer-la més accessible a turistes internacionals.

- Incorporar una previsió meteorològica integrada..

⸻

🙌 Gràcies per visitar Rutes Cara Nord!

Si tens suggeriments, dubtes o vols fer una ruta amb nosaltres, escriu-nos! 📩
