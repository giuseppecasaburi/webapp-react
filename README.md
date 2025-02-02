# Setup Web App React
 *lavoreremo anche su `webapp-express` (la stessa di ieri)*
 ## MILESTONE 1 ✅
 - Mettiamo su un nuovo progetto React aiutandoci con Vite ✅
 - Ripuliamo come sempre l’app da file e codice di esempio non necessari ✅
 - Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo) ✅
 
 ## MILESTONE 2 ✅
 - Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine. ✅
 - Creiamo 2 pagine:
     - La home ✅
     - la pagina in cui mostreremo la lista dei film ✅
 
 ## MILESTONE 3 ✅
 - Configuriamo l’app di backend (repo `webapp-express`) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware **CORS**; ✅
 - Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei film ✅
 
 ### Bonus
 - Impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props!
 - Implementare la ricerca libera che faccia riferimento al nome del film (coinvolge anche le modifiche in backend)
 - Implementare i filtri per genere e per anno di pubblicazione, dove si possa applicare un filtro alla volta oppure entrambi (coinvolge anche le modifiche in backend)
 - Curare l’aspetto estetico della vostra applicazione, quindi gestire le immagini, gestire lo stato di ricerca vuota e altri aspetti di UX



 **Traccia secondo giorno** 
 ## MILESTONE 4 ✅
 - In ultimo, effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni. ✅
 
 ### Bonus
 - usare lo slug al posto di id per richiedere i dettagli di un libro. ✅



 **Traccia terzo giorno**
 Miglioriamo l’esperienza dell’utente inserendo
 
 ## MILESTONE 1 (BACKEND)
 - Predisponiamo un’API per **salvare nel database** una nuova recensione legata ad un film.
 - Testiamola su postman e verifichiamo che nel DB venga effettivamente inserita una nuova recensione.
 
 ## MILESTONE 2 (FRONTEND)
 - Creiamo un componente che contenga il form per le recensioni.
 - Inseriamo questo componente nella pagina di dettaglio del film.
 - All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre.
 
 **BONUS**:
 - Inseriamo le validazioni sia lato backend che nel form di frontend.