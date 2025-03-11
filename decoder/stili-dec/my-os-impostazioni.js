  // Funzione per mostrare la notifica (popup)
    function showPopup(message) {
      const popup = document.getElementById('notification-popup');
      const messageElement = document.getElementById('notification-message');
      messageElement.textContent = message;
      popup.style.display = "block";
      
      // Chiude il popup dopo 3 secondi
      setTimeout(function() {
        popup.style.display = "none";
      }, 3000);
    }

    

    // Funzioni per le azioni dei link testuali
    function clearLocalStorage() {
      localStorage.clear();
      showPopup("LocalStorage svuotato!");
    }

    function clearSessionStorage() {
      sessionStorage.clear();
      showPopup("SessionStorage svuotato!");
    }

    function forceReload() {
      window.location.reload(true); // Ricarica la pagina senza cache
      showPopup("Pagina ricaricata senza cache!");
    }
