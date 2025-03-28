document.addEventListener('DOMContentLoaded', function () {
      // Definisci la data di scadenza
      var expirationDate = new Date('2025-04-10T00:30:00');
      var now = new Date();
      var isExpired = now > expirationDate;

      if (isExpired) {
        // Se l'abbonamento è scaduto: nasconde il video d'intro e mostra l'overlay con l'immagine.
        document.getElementById('loading-overlay').style.display = 'none';
        document.getElementById('expired-overlay').style.display = 'flex';
      } else {
        // Abbonamento attivo: gestisce il video d'intro
        var introVideo = document.getElementById('introVideo');
        introVideo.addEventListener('ended', function () {
          // Ferma il video sull'ultimo frame
          introVideo.pause();
          // Aggiunge il listener per il click sul contenitore per nasconderlo
          var loadingOverlay = document.getElementById('loading-overlay');
          loadingOverlay.addEventListener('click', function () {
            loadingOverlay.style.display = 'none';
          });
        });
      }

      // Logica per il click sull'immagine di abbonamento scaduto
      var expiredImage = document.getElementById('expiredImage');
      var expiredContent = document.getElementById('expired-content');

      expiredImage.addEventListener('click', function () {
        // Nasconde l'immagine
        expiredImage.style.display = 'none';

        // Crea l'elemento video per il riabbonamento
        var videoElem = document.createElement('video');
        videoElem.id = 'reSubscribeVideo';
        videoElem.autoplay = true;
        videoElem.muted = true;
        videoElem.playsInline = true;
        videoElem.style.width = "100%";
        videoElem.style.height = "auto";

        var sourceElem = document.createElement('source');
        sourceElem.src = "#";
        sourceElem.type = "video/mp4";
        videoElem.appendChild(sourceElem);
        videoElem.innerHTML += "Il tuo browser non supporta il video.";

        // Aggiunge il video al contenitore interno
        expiredContent.appendChild(videoElem);

        // Al termine del video, rimuove l'elemento video e mostra nuovamente l'immagine
        videoElem.addEventListener('ended', function () {
          videoElem.remove();
          expiredImage.style.display = 'block';
        });
      });
    });
