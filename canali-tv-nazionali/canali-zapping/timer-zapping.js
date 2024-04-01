document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.getElementById('background-overlay').style.display = "none"; // Nasconde lo sfondo dopo 3 secondi
        document.getElementById('player').classList.remove('hidden'); // Mostra il player video
        player.play();
    }, 3000);
});