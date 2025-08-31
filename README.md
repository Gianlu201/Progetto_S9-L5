# Netflix Clone

**Netflix Clone** — progetto didattico in React che replica la grafica della piattaforma Netflix e mostra film/movies recuperati dall'API pubblica **OMDb** (Open Movie Database). Il progetto è nato come esercizio iniziale per prendere dimestichezza con React, Vite e con le chiamate a servizi REST esterni.

---

## Descrizione
Questa applicazione riproduce la UI di un catalogo video in stile Netflix: homepage con righe tematiche di film, cards con poster, modal di dettaglio film. I dati sui film sono ottenuti dinamicamente tramite l'API di OMDb (ricerca per titolo e recupero dettagli tramite `imdbID`). L'obiettivo è principalmente didattico: esercitarsi nella componentizzazione di React, gestione dello stato (hooks), chiamate API, debounce della ricerca e gestione degli stati di caricamento/errore.

---

## Descrizione
La demo è disponibile al seguente ![link]()!

---

## Caratteristiche
- Interfaccia grafica tipo Netflix (hero, righe di film, card con poster).
- Ricerca film tramite barra di ricerca che interroga OMDb per titolo.
- Pagina/Modal di dettaglio film (titolo, anno, trama, attori, poster, voto IMDB se disponibile).
- Paginazione/parziale caricamento dei risultati (OMDb ritorna paginato – 10 risultati per pagina).
- Gestione degli stati: loading, success, error, empty state.
- Componenti riutilizzabili (MovieCard, MovieRow, SearchBar, ModalDetail, Loader).

---

## Tech stack e tecnologie usate
- React (Functional components + Hooks)  
- Vite 
- JavaScript, HTML, CSS, Bootstrap  
- Fetch API per chiamate HTTP verso OMDb  

---

## Struttura dei file 
```
/public
  /assets
/src
  /components
    SearchBar.jsx
    MovieCard.jsx
    MovieRow.jsx
    ModalDetail.jsx
    Header.jsx
  /pages
    Home.jsx
  /services
    omdbService.js
  /hooks
    useDebouncedValue.js
  App.jsx
  main.jsx
package.json
vite.config.js
README.md
```

---

## Setup locale (passo-passo)

1. Clona la repo:
```bash
git clone https://github.com/Gianlu201/NetflixClone.git
cd NetflixClone
```

2. Installa dipendenze:
```bash
npm install
# oppure
# yarn
```

3. Avvia il dev server:
```bash
npm run dev
# oppure yarn dev
```

5. Apri `http://localhost:5173` (o la porta mostrata da Vite).

---

## Endpoints OMDb (esempi)
OMDb è un servizio REST semplice da usare; endpoint principali utili qui sono:
- Ricerca per titolo (ritorna lista, 10 risultati per pagina):  
  `http://www.omdbapi.com/?apikey=YOURKEY&s=Inception&page=1`.
- Recupero dettagli per ID (imdbID):  
  `http://www.omdbapi.com/?apikey=YOURKEY&i=tt1375666&plot=full`.

Documentazione ufficiale OMDb: ![https://www.omdbapi.com/](https://www.omdbapi.com/)

---
