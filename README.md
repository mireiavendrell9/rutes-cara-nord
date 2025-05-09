 ## 🏞️ Rutes Cara Nord

Rutes Cara Nord és una pàgina web creada per promoure el senderisme al Parc Natural dels Ports, un dels espais naturals més emblemàtics del sud de Catalunya. Aquesta plataforma ofereix informació sobre rutes, pobles, activitats i recomanacions, amb una clara voluntat de divulgació geogràfica i educativa.

⸻

## 1⃣⃣ Tema i motivació**

El projecte neix de la passió per la natura, la muntanya i l’educació ambiental. Com a estudiant de Geografia, he volgut aplicar coneixements tècnics, cartogràfics i comunicatius per fer arribar aquest patrimoni natural al públic.

Aquesta web pretén:

- Fomentar el respecte pel medi ambient.

- Posar en valor els pobles rurals de l’entorn.

- Contribuir al turisme local sostenible.

- Servir com a recurs per a estudiants i visitants.

⸻

## 2⃣⃣ Dades i continguts**

## Fonts d’informació

- **Informació** procedent de fonts oficials i de confiança per garantir la qualitat del contingut:

  - Parc Natural dels Ports – Generalitat de Catalunya *Parc Natural dels Ports*.      https://parcsnaturals.gencat.cat/ca/ports/

  - Ajuntament d'Horta de Sant Joan. (s.d.). *Informació turística*. 
   https://www.hortadesantjoan.cat/

  - Wikipedia. *Diverses entrades sobre pobles i geografia del Massís dels Ports*.   https://ca.wikipedia.org/

  - Institut Cartogràfic i Geològic de Catalunya (ICGC). (s.d.). *Cartografia i ortofotos*.
  https://www.icgc.cat/

## Eines utilitzades:

- QGIS per a la creació de les capes de rutes i punts.

- Leaflet i qgis2web per crear el mapa interactiu exportable.

- HTML, CSS, JS i Bootstrap per al desenvolupament web.

- Visual Studio Code com a entorn de programació principal.

- GitHub per allotjar la web i gestionar el control de versions,Git s’ha utilitzat per fer seguiment dels canvis, revertir errors i col·laborar de forma estructurada.

⸻

## 3⃣⃣ Estructura de la web**
La web *Rutes Cara Nord* es compon de diverses pàgines HTML interconnectades a través d’un menú de navegació comú. Cada pàgina aporta una funcionalitat específica, però comparteixen una estètica coherent i una estructura pensada per oferir una experiència clara, intuïtiva i agradable per a l’usuari.

- **Navbar (menú de navegació):**  
  És un component fix que es troba sempre visible a la part superior de la pantalla. Inclou el logotip i el nom del projecte alineats a l'esquerra, i un menú amb enllaços a totes les seccions: *Inici*, *Sobre Nosaltres*, *Rutes*, *Calendari*, *Pobles*, *Temps* i *Contacte*. Aquesta navbar és totalment responsiva gràcies a Bootstrap, i es transforma en un menú desplegable tipus "hamburguesa" en dispositius mòbils, mantenint la funcionalitat i l’accessibilitat.

- **Inici:**  
  Aquesta pàgina actua com a porta d’entrada al projecte. Conté un *header* a pantalla completa amb una imatge de fons impactant i un missatge de benvinguda. A sota, es presenta un vídeo que mostra paisatges i fauna del parc per captar l'atenció del visitant, i finalment, tres targetes visuals que introdueixen els apartats principals: *Rutes*, *Pobles* i *Calendari*.

- **Sobre Nosaltres:**  
  Una secció pensada per presentar els membres de l’equip amb targetes personals que inclouen una fotografia, una cita identificativa, l’especialització de cada persona (ecoturisme, fotografia, aus, etc.), la zona del parc amb la qual s’identifiquen i el seu correu electrònic. Aquest disseny humanitza el projecte i el connecta amb els valors de l’equip.

- **Rutes:**  
  Aquest és un dels apartats centrals. Conté un mapa interactiu creat amb QGIS i exportat mitjançant `qgis2web`. El visor inclou diverses capes: rutes classificades per dificultat, punts dels pobles i límit del parc. Les rutes es poden activar i desactivar des de la llegenda, i cada traçat mostra un *popup* amb descripció i imatge. S’ha cuidat molt l’estètica, personalitzant llegenda i popups amb CSS. A més, sota el mapa hi ha una galeria d’imatges tipus carrusel, implementada amb JavaScript, que mostra una fotografia gran i permet passar manualment o automàticament entre imatges destacades.

- **Calendari:**  
  Aquesta secció combina funcionalitat informativa i pràctica. S’hi ha integrat un *Google Calendar* que mostra les activitats previstes de manera clara i actualitzada. Com que està vinculat al compte de Google, els canvis es reflecteixen automàticament. A continuació, una taula feta amb Bootstrap mostra les rutes disponibles amb les seves dates, places i un botó per reservar. S’ha afegit una petita funció en JavaScript per reduir les places disponibles quan s’activa la reserva i mostrar el botó com a “Complet” quan ja no en queden.

- **Pobles:**  
  Aquí es presenten fitxes informatives dels municipis que envolten el Parc Natural dels Ports. Cada fitxa mostra una fotografia gran, una descripció, dades d’altitud, població, i les rutes més properes. La presentació alterna la posició de la imatge i el text per fer-lo més visual i atractiu. La informació ha estat recollida de fonts fiables com els webs municipals i la Viquipèdia.

- **Temps:**  
  Aquesta secció mostra la predicció meteorològica a través d’un *widget* de Meteored. D’aquesta manera, els usuaris poden consultar el temps abans de fer una sortida al parc. El widget és responsiu i s’integra visualment amb el disseny general de la web.

- **Contacte:**  
  Conté un formulari per enviar un correu directe a l’equip mitjançant l’etiqueta `mailto`, amb camps per al nom, el correu electrònic i el missatge. També hi ha un segon formulari fet amb *Google Forms*, pensat per recollir comentaris i suggeriments. A més, la secció incorpora una llista de *Preguntes Freqüents* desplegables mitjançant un sistema d’acordions (Bootstrap), que resol dubtes habituals abans d’apuntar-se a una activitat.

- **Footer:**  
  És el peu de pàgina comú a tot el lloc. Conté el nom del projecte i icones amb enllaços a les xarxes socials. El disseny segueix la gamma cromàtica de la resta del web i reforça la coherència visual.

⸻

## 4⃣⃣ Web responsive i accessibilitat**

La pàgina web ha estat dissenyada pensant en una experiència d’usuari òptima des de qualsevol dispositiu: ordinador, tauleta o mòbil. Gràcies a les eines que proporciona **Bootstrap 5** i a una estructura HTML curosament planificada, s’aconsegueix una navegació fluida i una lectura agradable independentment de la mida de pantalla.

Per fer-ho possible, s’han utilitzat recursos com:

- **Sistema de graelles de Bootstrap 5**: organització del contingut en files i columnes (`container`, `row`, `col-md-6`, etc.) per garantir flexibilitat i una correcta distribució dels elements.
  
- **Imatges amb `.img-fluid`**: asseguren que les imatges s’adaptin automàticament al contenidor que les envolta, evitant desbordaments.

- **Menú responsive tipus “hamburguesa”**: gràcies a les classes `collapse` i `navbar-toggler`, el menú es converteix en un botó desplegable a pantalles petites, millorant l’accessibilitat i la navegació en dispositius mòbils.

- **Classes de disseny modern com `d-flex`, `justify-content-center`, etc.**: per alinear continguts i crear distribucions visuals netes i coherents.

### Accessibilitat

S’han aplicat criteris d’accessibilitat per fer que la web sigui usable per tothom, independentment de les seves capacitats:

- **Colors amb contrast adequat** per garantir la llegibilitat de textos sobre fons verds, blancs o imatges.

- **Atributs `alt` a les imatges**, que descriuen visualment el contingut per a persones que utilitzen lectors de pantalla.

- **Etiquetatge semàntic i `aria-labels`**: afegeixen informació contextual a elements interactius per facilitar-ne la comprensió.

- **Transicions suaus amb efectes hover i scroll controlat**, que milloren l’experiència i eviten canvis bruscos en la interfície.


⸻

## 5⃣⃣ Cartografia i mapa interactiu**

Un dels elements centrals de la web és el **visor cartogràfic interactiu**, ubicat dins l’apartat *Rutes*. Aquest mapa permet explorar les diferents rutes del Parc Natural dels Ports de manera visual i intuïtiva.

### Tecnologies utilitzades:

- **QGIS**: per crear i editar les capes (rutes, límits del parc, pobles...).
- **QGIS2Web**: plugin per exportar el projecte a codi HTML + Leaflet.
- **Leaflet**: biblioteca JavaScript lleugera per a mapes interactius.
- **CSS**: per personalitzar l’estètica de popups, llegenda i controls.

### Capes del mapa:

El visor inclou diferents capes temàtiques:

- Rutes classificades per dificultat: fàcil (verd), moderada (blau) i difícil (vermell).
- Delimitació del Parc Natural.
- Punts amb els pobles i informació associada.
- Mapa de fons  (ESRI Topogràfic).

L’usuari pot activar o desactivar cada capa mitjançant la llegenda lateral, i fer clic sobre una ruta per obrir una finestra emergent (popup) amb una descripció i una imatge representativa.

### Personalització

S’han editat estils del visor amb CSS per:

- Ampliar i embellir els popups (fons verd suau, vora arrodonida...).
- Afegir una llegenda amb títol personalitzat i disseny clar.
- Millorar els controls de zoom, mesura i navegació.

### Integració

El visor s’ha integrat dins de la pàgina mitjançant un **iframe**, mantenint-lo totalment responsiu. Es redimensiona correctament segons el dispositiu i conserva tota la seva funcionalitat.

⸻

## 6⃣⃣ Dificultats, aprenentatges i millores futures

### Dificultats

Durant el desenvolupament del projecte, han sorgit diversos reptes tècnics i de disseny que han requerit temps i dedicació:

- **Integració del mapa a la web**: especialment pel que fa als camins relatius (`paths`), la gestió dels arxius generats per QGIS2Web i la seva correcta col·locació dins l’estructura de carpetes del projecte.
- **Compatibilitat d’estils**: adaptar l’estètica pròpia (colors, tipografies, fons, popups...) als components predefinits de Bootstrap sense perdre coherència visual.
- **Adaptació responsive del visor**: assegurar que el mapa es mostrés correctament en dispositius mòbils.

### Aprenentatges

El projecte m’ha permès aprendre i posar en pràctica molts coneixements, tant tècnics com conceptuals:

- **Ús avançat de Bootstrap**: sistemes de columnes, navbar responsive, botons, formularis, i components com els "accordion" o galeries d’imatges.
- **Cartografia web des de zero**: generació pròpia de dades geogràfiques (tracks, punts i límits), disseny del mapa amb QGIS i exportació amb QGIS2Web per obtenir un visor Leaflet completament funcional.
- **Disciplinar la codificació**: mantenir un codi ordenat, tant en HTML com en CSS i JS.

> Ha estat un procés molt absorbent: hi he dedicat moltes hores, però com que realment m'apassionava el tema, sovint ni me n’adonava del pas del temps.

### Millores futures

De cara a futures ampliacions o iteracions del projecte, es proposen les següents millores:

- **Panell d’administració privat** per gestionar inscripcions, afegir activitats i controlar el nombre de places de manera segura.
- **Fitxes de rutes descarregables** en format PDF i GPX, amb dades tècniques, perfils d’elevació, consells i punts d’interès.
- **Traducció multilingüe** (anglès, francès, etc.) per obrir la web a un públic internacional, especialment turistes de natura.
- **Integració meteorològica en temps real**, mitjançant una API o widget per consultar el temps previst a les rutes.
- **Filtratge avançat de rutes**: afegir un cercador per dificultat, durada, temàtica o zona.

⸻

Gràcies per visitar Rutes Cara Nord!

Si tens suggeriments, dubtes o vols fer una ruta amb nosaltres, escriu-nos! 📩
