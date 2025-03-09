// Durante l'installazione del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      // Aggiungi i file da memorizzare nella cache
      return cache.addAll([
        '/',                     // Homepage
        'https://brymeteo.github.io/player/decoder/prova-decoder.html',            // Pagina principale
        'https://brymeteo.github.io/player/decoder/stili-dec/manifest.json',         // Manifest della PWA
        'https://i.ibb.co/sd5mVxJF/bryos.png',              // Icona
        'https://brymeteo.github.io/player/decoder/stili-dec/sezioni-pagine-decoder.js',            // CSS
        'https://brymeteo.github.io/player/decoder/stili-dec/sfondi-decoder.js',                // JavaScript
        'https://brymeteo.github.io/player/decoder/immagini/bry-logo-ufficiale4.webp',       // Immagine/logo
        
      ]);
    })
  );
});

// Durante la fase di attivazione
self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['my-cache']; // Cache da mantenere
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Elimina cache vecchie
          }
        })
      );
    })
  );
});

// Gestione delle richieste fetch (quando l'utente naviga)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Se la risorsa è nella cache, restituiscila
      if (cachedResponse) {
        return cachedResponse;
      }
      // Altrimenti, fai una richiesta di rete
      return fetch(event.request).then((response) => {
        // Se è una risorsa immagine, aggiungila alla cache
        if (event.request.url.includes('/images/')) {
          caches.open('my-cache').then((cache) => {
            cache.put(event.request, response.clone());
          });
        }
        return response;
      });
    })
  );
});
