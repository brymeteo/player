  let currentCardIndex = -1;
let programCards = [];

 // Mappa dei loghi per ogni canale
    const logos = {
      "rai-1": "https://api.superguidatv.it/v1/channels/217/logo?width=320&theme=dark",
      "rai-2": "https://api.superguidatv.it/v1/channels/218/logo?width=320&theme=dark",
      "rai-3": "https://api.superguidatv.it/v1/channels/219/logo?width=320&theme=dark",
      "canale-5": "https://api.superguidatv.it/v1/channels/187/logo?width=320&theme=dark",
      "italia-1": "https://api.superguidatv.it/v1/channels/188/logo?width=320&theme=dark",
      "rete-4": "https://api.superguidatv.it/v1/channels/189/logo?width=320&theme=dark",
      "la7": "https://api.superguidatv.it/v1/channels/253/logo?width=320&theme=dark",
      "Tv8": "https://api.superguidatv.it/v1/channels/237/logo?width=320&theme=dark",
      "nove": "https://api.superguidatv.it/v1/channels/238/logo?width=320&theme=dark",
      "20-mediaset": "https://api.superguidatv.it/v1/channels/443/logo?width=320&theme=dark",
      "rai-4": "https://api.superguidatv.it/v1/channels/220/logo?width=320&theme=dark",
      "rai-premium": "https://api.superguidatv.it/v1/channels/225/logo?width=320&theme=dark",
      "mediaset-27": "https://api.superguidatv.it/v1/channels/601/logo?width=320&theme=dark",
      "la-5": "https://i.ibb.co/B2dq6M36/logo-1.webp",
      "real-time": "https://api.superguidatv.it/v1/channels/255/logo?width=320&theme=dark",
      "la7d": "https://i.ibb.co/ZftFtWZ/logo.png",
      "mediaset-extra": "https://api.superguidatv.it/v1/channels/194/logo?width=320&theme=dark",
      "topcrime": "https://api.superguidatv.it/v1/channels/193/logo?width=320&theme=dark",
      "warner-tv": "https://i.ibb.co/rdv3dg9/logo.png",
      "dmax": "https://i.ibb.co/8gM8bc1W/logo.webp",
      "mediaset-italia-due": "https://api.superguidatv.it/v1/channels/191/logo?width=320&theme=dark",
      "giallo": "https://i.ibb.co/YZTNyP4/logo.png",
      "cielo": "https://api.superguidatv.it/v1/channels/239/logo?width=320&theme=dark",
      "foodnetwork": "https://i.ibb.co/LJT1d90/logo.png",
      "home-and-garden-tv": "https://i.ibb.co/1GN3qnt/logo.png",
      "tv2000": "https://i.ibb.co/8dBBCBN/logo.png",
      "gambero-rosso": "https://i.ibb.co/7NQhbNQb/logo.webp",
      "history-channel": "https://i.ibb.co/TWLHWxH/logo-1-1.png",
      "rsi-la1": "https://i.ibb.co/h55V9hy/logo-1.webp",
      "rsi-la2": "https://i.ibb.co/x8dpNHBg/logo-1.webp",
      "sportitalia": "https://i.ibb.co/qsKy4tb/logo.png",
      "iris": "https://i.ibb.co/TxYDh6x8/logo-1.webp",
      "cine-34": "https://api.superguidatv.it/v1/channels/574/logo?width=320&theme=dark",
      "rai-movie": "https://api.superguidatv.it/v1/channels/229/logo?width=320&theme=dark",
      "focus": "https://api.superguidatv.it/v1/channels/249/logo?width=320&theme=dark",
      "motor-trend": "https://api.superguidatv.it/v1/channels/444/logo?width=320",
      "sky-tg24": "https://api.superguidatv.it/v1/channels/240/logo?width=320",
      "tgcom24": "https://api.superguidatv.it/v1/channels/197/logo?width=320",
      "rai-news-24": "https://api.superguidatv.it/v1/channels/222/logo?width=320",
      "boing": "https://api.superguidatv.it/v1/channels/195/logo?width=320",
      "k2": "https://api.superguidatv.it/v1/channels/245/logo?width=320",
      "rai-gulp": "https://api.superguidatv.it/v1/channels/228/logo?width=320",
      "rai-yoyo": "https://api.superguidatv.it/v1/channels/227/logo?width=320",
      "frisbee": "https://api.superguidatv.it/v1/channels/246/logo?width=320",
      "cartoonito": "https://i.ibb.co/Yt6t6cM/logo-1.png",
      "super": "https://api.superguidatv.it/v1/channels/247/logo?width=320",
      "deejay-tv": "https://api.superguidatv.it/v1/channels/162/logo?width=320",
      "rtl-102.5-tv": "https://api.superguidatv.it/v1/channels/243/logo?width=320",
      "radioitaliatv": "https://i.ibb.co/gm6gY0H/logo-1.png",
      "radiofreccia": "https://i.ibb.co/SVjZvd0/logo-1.png"
    };

   const programUrls = {
      "rai-1": "https://brymeteo.github.io/player/canali-tv-nazionali/101-Rai1.html",
      "rai-2": "https://brymeteo.github.io/player/canali-tv-nazionali/102-Rai2.html",
      "rai-3": "https://brymeteo.github.io/player/canali-tv-nazionali/103-Rai3.html",
      "canale-5": "https://brymeteo.github.io/player/canali-tv-nazionali/105-Canale5.html",
      "italia-1": "https://brymeteo.github.io/player/canali-tv-nazionali/106-Italia1.html",
      "rete-4": "https://brymeteo.github.io/player/canali-tv-nazionali/104-Rete4.html",
      "la7": "https://brymeteo.github.io/player/canali-tv-nazionali/107-La7.html",
      "Tv8": "https://brymeteo.github.io/player/canali-tv-nazionali/113-Tv8.html",
      "nove": "https://brymeteo.github.io/player/canali-tv-nazionali/114-Nove.html",
      "20-mediaset": "https://brymeteo.github.io/player/canali-tv-nazionali/115-20Mediaset.html",
      "rai-4": "https://brymeteo.github.io/player/canali-tv-nazionali/116-Rai4.html",
      "rai-premium": "https://brymeteo.github.io/player/canali-tv-nazionali/117-Raipremium.html",
      "mediaset-27": "https://brymeteo.github.io/player/canali-tv-nazionali/118-27Twentyseven.html",
      "la-5": "https://brymeteo.github.io/player/canali-tv-nazionali/119-La5.html",
      "real-time": "https://brymeteo.github.io/player/canali-tv-nazionali/120-Realtime.html",
      "la7d": "https://brymeteo.github.io/player/canali-tv-nazionali/121-La7d.html",
      "mediaset-extra": "https://brymeteo.github.io/player/canali-tv-nazionali/122-MediasetExtra.html",
      "topcrime": "https://brymeteo.github.io/player/canali-tv-nazionali/125-Topcrime.html",
      "warner-tv": "https://brymeteo.github.io/player/canali-tv-nazionali/126-WarnerTV.html",
      "dmax": "https://brymeteo.github.io/player/canali-tv-nazionali/127-Dmax.html",
      "mediaset-italia-due": "https://brymeteo.github.io/player/canali-tv-nazionali/128-Italia2.html",
      "giallo": "https://brymeteo.github.io/player/canali-tv-nazionali/130-Giallo.html",
      "cielo": "https://brymeteo.github.io/player/canali-tv-nazionali/131-Cielo.html",
      "foodnetwork": "https://brymeteo.github.io/player/canali-tv-nazionali/132-FoodNetwork.html",
      "home-and-garden-tv": "https://brymeteo.github.io/player/canali-tv-nazionali/133-HGTV.html",
      "tv2000": "https://brymeteo.github.io/player/canali-tv-nazionali/134-TV2000.html",
      "gambero-rosso": "https://brymeteo.github.io/player/canali-tv-nazionali/139-Gambero-Rosso.html",
      "history-channel": "https://brymeteo.github.io/player/canali-tv-nazionali/135-History-channel.html",
      "rsi-la1": "https://brymeteo.github.io/player/canali-tv-nazionali/137-Rsi-la1.html",
      "rsi-la2": "https://brymeteo.github.io/player/canali-tv-nazionali/138-Rsi-la2.html",
      "sportitalia": "https://brymeteo.github.io/player/canali-tv-nazionali/152-Sportitalia.html",
      "iris": "https://brymeteo.github.io/player/canali-tv-nazionali/217-Iris.html",
      "cine-34": "https://brymeteo.github.io/player/canali-tv-nazionali/218-Cine34.html",
      "rai-movie": "https://brymeteo.github.io/player/canali-tv-nazionali/219-RaiMovie.html",
      "focus": "https://brymeteo.github.io/player/canali-tv-nazionali/300-Focus.html",
      "motor-trend": "https://brymeteo.github.io/player/canali-tv-nazionali/305-Motortrend.html",
      "sky-tg24": "https://brymeteo.github.io/player/canali-tv-nazionali/400-Skytg24.html",
      "tgcom24": "https://brymeteo.github.io/player/canali-tv-nazionali/401-Tgcom24.html",
      "rai-news-24": "https://brymeteo.github.io/player/canali-tv-nazionali/402-Rainews24.html",
      "boing": "https://brymeteo.github.io/player/canali-tv-nazionali/501-Boing.html",
      "k2": "https://brymeteo.github.io/player/canali-tv-nazionali/502-K2.html",
      "rai-gulp": "https://brymeteo.github.io/player/canali-tv-nazionali/503-Raigulp.html",
      "rai-yoyo": "https://brymeteo.github.io/player/canali-tv-nazionali/504-Raiyoyo.html",
      "frisbee": "https://brymeteo.github.io/player/canali-tv-nazionali/505-Fresbee.html",
      "cartoonito": "https://brymeteo.github.io/player/canali-tv-nazionali/506-Cartoonito.html",
      "super": "https://brymeteo.github.io/player/canali-tv-nazionali/507-Super.html",
      "deejay-tv": "https://brymeteo.github.io/player/canali-tv-nazionali/600-DeejayTV.html",
      "rtl-102.5-tv": "https://brymeteo.github.io/player/canali-tv-nazionali/601-Rtl1025.html",
      "radioitaliatv": "https://brymeteo.github.io/player/canali-tv-nazionali/602-Radioitalia.html",
      "radiofreccia": "https://brymeteo.github.io/player/canali-tv-nazionali/607-Radio-Freccia.html"
    
    };

const selectedChannelIds = ["boing", "k2", "rai-gulp", "rai-yoyo", "frisbee", "cartoonito", "super"];  // Canali desiderati

async function fetchPrograms() {
const response = await fetch('https://brymeteo.github.io/tv/dati_programmi.json');
const channels = await response.json();

// Ottieni i contenitori
const container = document.getElementById('tv-programs');
const container1 = document.getElementById('tv-programs-1');

// Se nessun contenitore è trovato, esci
if (!container && !container1) {
  console.error('Nessun contenitore trovato!');
  return;
}

const now = new Date();
let activeIndex = currentCardIndex;

// Resetta i contenuti
if (container) container.innerHTML = "";
if (container1) container1.innerHTML = "";
programCards = [];

channels.forEach((channel) => {
  const currentProgram = channel.programs.find(p => {
    const start = new Date(p.start);
    const end = new Date(p.end);
    return now >= start && now <= end;
  });

  if (currentProgram) {
    const startTime = new Date(currentProgram.start);
    const endTime = new Date(currentProgram.end);
    const progress = ((now - startTime) / (endTime - startTime)) * 100;
    const logoUrl = logos[channel.id] || "https://upload.wikimedia.org/wikipedia/commons/b/bc/No_image_available.svg";
    const programUrl = programUrls[channel.id] || "#";

    // Creazione della card
    let cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
    cardContainer.id = `card-container-${channel.id}`;

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img class="poster" src="${currentProgram.poster}" alt="${currentProgram.title}">
      <div class="overlay"></div>
      <img class="logo" src="${logoUrl}" alt="Logo ${channel.name}">
      <div class="progress-container">
        <div class="progress-bar" style="width: ${progress}%"></div>
      </div>
      <div class="play-icon"></div>
    `;

    const title = document.createElement('div');
    title.className = 'program-title';
    title.textContent = currentProgram.title;

    card.addEventListener('click', () => {
      openModal(programUrl);
    });

    cardContainer.appendChild(card);
    cardContainer.appendChild(title);

    // Aggiungi la card al contenitore tv-programs solo se esiste
    if (container) {
      container.appendChild(cardContainer);
    }

    // Se l'ID è nell'array selectedChannelIds e tv-programs è assente, aggiungi la card solo a tv-programs-1
    if (container1 && !container) {
      if (selectedChannelIds.includes(channel.id)) {
        const cardClone = cardContainer.cloneNode(true); // Clona la card
        container1.appendChild(cardClone);  // Aggiungi la copia al contenitore tv-programs-1
      }
    }

    programCards.push({
      cardContainer: cardContainer,
      programUrl: programUrl,
      startTime: startTime,
      endTime: endTime
    });
  }
});

if (programCards.length > 0) {
  currentCardIndex = Math.min(activeIndex, programCards.length - 1);
  programCards[currentCardIndex].cardContainer.classList.add('active');
}
}

function openModal(url) {
const modal = document.getElementById('program-modal');
const iframe = document.getElementById('program-iframe');
iframe.src = url;
modal.style.display = 'flex';
}

function closeModal() {
const modal = document.getElementById('program-modal');
const iframe = document.getElementById('program-iframe');
iframe.src = "";
modal.style.display = 'none';
}

function updateProgressBar() {
const now = new Date();
programCards.forEach(cardObj => {
  const { startTime, endTime, cardContainer } = cardObj;
  const progress = ((now - startTime) / (endTime - startTime)) * 100;
  const progressBar = cardContainer.querySelector('.progress-bar');
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
});
}

function navigateCards(direction) {
if (programCards.length === 0) return;

if (direction === 'next') {
  currentCardIndex = (currentCardIndex + 1) % programCards.length;
} else if (direction === 'prev') {
  currentCardIndex = (currentCardIndex - 1 + programCards.length) % programCards.length;
}

// Aggiungi o rimuovi la classe "active" per la card corrente
programCards.forEach((cardObj, index) => {
  if (index === currentCardIndex) {
    cardObj.cardContainer.classList.add('active');
    cardObj.cardContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    cardObj.cardContainer.classList.remove('active');
  }
});
}

function initialize() {
fetchPrograms();
setInterval(fetchPrograms, 1000);  // Ricarica i programmi ogni 10 secondi
setInterval(updateProgressBar, 1000);  // Aggiorna la barra di progresso ogni secondo

// Aggiungiamo i listener per i tasti (6 per aprire il modal, 7 e 8 per navigare tra i programmi)
window.addEventListener('keydown', (event) => {
  if (event.key === '6') {
    // Verifica se un contenitore esiste
    if (currentCardIndex !== -1) {
      const modal = document.getElementById('program-modal');
      const currentCardObj = programCards[currentCardIndex];

      // Se il modal è già aperto, chiudilo, altrimenti aprilo con l'URL del programma
      if (modal.style.display === 'flex') {
        closeModal();
      } else if (currentCardObj) {
        const url = currentCardObj.programUrl;
        openModal(url);
      }
    }
  }

  if (event.key === '7') {
    // Naviga verso il prossimo programma
    navigateCards('next');
  }

  if (event.key === '8') {
    // Naviga verso il programma precedente
    navigateCards('prev');
  }
});

// Gestione interazione con il mouse per navigare tra i programmi
document.body.addEventListener('click', (event) => {
  if (event.target.closest('.card-container')) {
    // Quando una card viene cliccata, apri il modal con l'URL corrispondente
    const card = event.target.closest('.card-container');
    const cardId = card.id.replace('card-container-', '');
    const programUrl = programCards.find(item => item.cardContainer.id === card.id)?.programUrl;
    if (programUrl) {
      openModal(programUrl);
    }
  }
});
}

initialize(); // Esegui l'inizializzazione
