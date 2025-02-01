
    // Funzione per calcolare il tempo rimanente
    function updateCountdown() {
        const scadenza = new Date('2025-03-10'); // Imposta la data di scadenza dell'abbonamento
        const today = new Date();
        
        // Calcola la differenza in millisecondi
        const diff = scadenza - today;
        
        // Se la data di scadenza è già passata
        if (diff <= 0) {
            document.getElementById('countdown').textContent = 'Abbonamento scaduto';
            return;
        }
        
        // Calcola giorni rimanenti
        const giorniRimanenti = Math.ceil(diff / (1000 * 3600 * 24)); // Converti la differenza in giorni
        document.getElementById('countdown').textContent = giorniRimanenti + ' giorni';
    }

    // Aggiorna il countdown ogni giorno (una volta al giorno)
    setInterval(updateCountdown, 1000 * 60 * 60 * 24);

    // Aggiorna immediatamente al caricamento della pagina
    updateCountdown();
