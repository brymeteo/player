 document.addEventListener('DOMContentLoaded', function () {
      function showLoading() {
        document.getElementById('loading-overlay').style.display = 'flex';
        // Dopo 9 secondi aggiorna l'overlay
        setTimeout(updateOverlay, 9000);
      }

      function updateOverlay() {
        // Cambia il testo di progress
        document.querySelector('.progress-text').textContent = "Caricamento completato";
        // Nasconde il cs-loader
        document.querySelector('.cs-loader').style.display = 'none';

        // Crea il pulsante "Accedi"
        var button = document.createElement("button");
        button.textContent = "Accedi";
        button.style.fontSize = "20px";
        button.style.padding = "10px 20px";
        button.style.marginTop = "20px";
        button.style.cursor = "pointer";

        // Aggiunge l'evento click per rimuovere l'overlay e attivare il full screen
        button.addEventListener("click", function() {
          document.getElementById('loading-overlay').style.display = 'none';
          var elem = document.documentElement;
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
          }
        });

        // Aggiunge il pulsante all'overlay
        document.querySelector('.overlay-content').appendChild(button);
      }

      function checkSubscriptionStatus() {
        var expirationDate = new Date('2025-04-10T00:30:00');
        var currentDate = new Date();

        if (currentDate > expirationDate) {
          showExpiredMessage();
        }
      }

      function showExpiredMessage() {
        document.getElementById('expired-overlay').style.display = 'flex';
      }

      showLoading();
      checkSubscriptionStatus();
    });
