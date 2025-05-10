<!-- sezione Altri canali -->

function customizeOptionsDisplay() {
  let content = `
     <div style="margin: -390px auto; margin-left: 90px; width: 90%;">


<link rel="stylesheet" href="https://brymeteo.github.io/player/decoder/style-film-ondemand.css" data-n-g="">

<div class="cp_grid__wrapper cp_spacing--03-top" data-testid="category-mid-rails-upsell-banner"><picture class="cp_picture" data-testid="free-trial-banner"><source media="(min-width: 1920px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 1280px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 768px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><img alt="Start your 7 day free trial" class="cp_picture__img" src="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"></picture></a></div>


   
    <div data-testid="standard-grid" class="cp_grid__wrapper standard-grid">
      <div class="cp_grid cp_section-header cp_grid--justify-space-between cp_grid--align-items-bottom">
        <div class="cp_grid cp_grid--align-items-center cp_section-header__children">
          <h1 class="cp_heading cp_heading--subtitle cp_section-header__heading">Altri Canali</h1>
        </div>
      </div>
      <section class="cp_tile-grid">
        <div id="cards-container" class="cp_tile-grid__items"></div>
      </section>
    </div>
  `;
  
  document.getElementById('main-content').innerHTML = content;

  // Carica il file JSON e genera le card
  fetch('https://brymeteo.github.io/player/decoder/Generi/sezione-altri-canali.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('cards-container');
      container.innerHTML = data.map(film => `
        <a class="cp_link" tabindex="0" href="${film.link}" data-lity>
          <article class="cp_tile cp_tile--grid-standard" aria-label="${film.ariaLabel}">
            <div class="cp_tile__body-wrapper">
              <picture class="cp_picture">
                <img alt="" class="cp_picture__img" src="${film.img}">
              </picture>
              <div class="cp_tile__body cp_tile__body--without-progress cp_tile__body--without-title-art" aria-hidden="true">
                <div class="cp_tile__overlay">
                  <h2 class="cp_tile__title-text cp_tile__title-text--body">${film.titolo}</h2>
                  <p class="cp_tile__info cp_tile__info--body">
                    <span class="description cp_tile__info--body__description cp_tile__info--body__description--no-content-info cp_tile__linear-layout">${film.descrizione}</span>
                  </p>
                </div>
              </div>
            </div>
            <footer class="cp_tile__footer" aria-hidden="true">
              <h2 class="cp_tile__title-text cp_tile__title-text--footer">${film.titoloFooter}</h2>
              <p class="cp_tile__info cp_tile__info--footer">
                <span class="description cp_tile__info--footer__description cp_tile__info--footer__description--no-content-info cp_tile__linear-layout">${film.descrizioneFooter}</span>
              </p>
            </footer>
          </article>
        </a>
      `).join('');
    })
    .catch(error => console.error('Errore nel caricamento del JSON:', error));
}

<!-- sezione Intrattenimento -->


function adjustSettingsInterface() {
  let content = `
     <div style="margin: -390px auto; margin-left: 90px; width: 90%;">


<link rel="stylesheet" href="https://brymeteo.github.io/player/decoder/style-film-ondemand.css" data-n-g="">

<div class="cp_grid__wrapper cp_spacing--03-top" data-testid="category-mid-rails-upsell-banner"><picture class="cp_picture" data-testid="free-trial-banner"><source media="(min-width: 1920px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 1280px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 768px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><img alt="Start your 7 day free trial" class="cp_picture__img" src="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"></picture></a></div>


   
    <div data-testid="standard-grid" class="cp_grid__wrapper standard-grid">
      <div class="cp_grid cp_section-header cp_grid--justify-space-between cp_grid--align-items-bottom">
        <div class="cp_grid cp_grid--align-items-center cp_section-header__children">
          <h1 class="cp_heading cp_heading--subtitle cp_section-header__heading">Programmi</h1>
        </div>
      </div>
      <section class="cp_tile-grid">
        <div id="cards-container" class="cp_tile-grid__items"></div>
      </section>
    </div>
  `;
  
  document.getElementById('main-content').innerHTML = content;

  // Carica il file JSON e genera le card
  fetch('https://brymeteo.github.io/player/decoder/.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('cards-container');
      container.innerHTML = data.map(film => `
        <a class="cp_link" tabindex="0" href="${film.link}" data-lity>
          <article class="cp_tile cp_tile--grid-standard" aria-label="${film.ariaLabel}">
            <div class="cp_tile__body-wrapper">
              <picture class="cp_picture">
                <img alt="" class="cp_picture__img" src="${film.img}">
              </picture>
              <div class="cp_tile__body cp_tile__body--without-progress cp_tile__body--without-title-art" aria-hidden="true">
                <div class="cp_tile__overlay">
                  <h2 class="cp_tile__title-text cp_tile__title-text--body">${film.titolo}</h2>
                  <p class="cp_tile__info cp_tile__info--body">
                    <span class="description cp_tile__info--body__description cp_tile__info--body__description--no-content-info cp_tile__linear-layout">${film.descrizione}</span>
                  </p>
                </div>
              </div>
            </div>
            <footer class="cp_tile__footer" aria-hidden="true">
              <h2 class="cp_tile__title-text cp_tile__title-text--footer">${film.titoloFooter}</h2>
              <p class="cp_tile__info cp_tile__info--footer">
                <span class="description cp_tile__info--footer__description cp_tile__info--footer__description--no-content-info cp_tile__linear-layout">${film.descrizioneFooter}</span>
              </p>
            </footer>
          </article>
        </a>
      `).join('');
    })
    .catch(error => console.error('Errore nel caricamento del JSON:', error));
}



<!-- sezione On Demand Serie TV -->

 function showSettings() {
  let content = `
     <div style="margin: -390px auto; margin-left: 90px; width: 90%;">


<link rel="stylesheet" href="https://brymeteo.github.io/player/decoder/style-film-ondemand.css" data-n-g="">

<div class="cp_grid__wrapper cp_spacing--03-top" data-testid="category-mid-rails-upsell-banner"><picture class="cp_picture" data-testid="free-trial-banner"><source media="(min-width: 1920px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 1280px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 768px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><img alt="Start your 7 day free trial" class="cp_picture__img" src="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"></picture></a></div>


   
    <div data-testid="standard-grid" class="cp_grid__wrapper standard-grid">
      <div class="cp_grid cp_section-header cp_grid--justify-space-between cp_grid--align-items-bottom">
        <div class="cp_grid cp_grid--align-items-center cp_section-header__children">
          <h1 class="cp_heading cp_heading--subtitle cp_section-header__heading">Serie TV</h1>
        </div>
      </div>
      <section class="cp_tile-grid">
        <div id="cards-container" class="cp_tile-grid__items"></div>
      </section>
    </div>
  `;
  
  document.getElementById('main-content').innerHTML = content;

  // Carica il file JSON e genera le card
  fetch('https://brymeteo.github.io/player/decoder/.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('cards-container');
      container.innerHTML = data.map(film => `
        <a class="cp_link" tabindex="0" href="${film.link}" data-lity>
          <article class="cp_tile cp_tile--grid-standard" aria-label="${film.ariaLabel}">
            <div class="cp_tile__body-wrapper">
              <picture class="cp_picture">
                <img alt="" class="cp_picture__img" src="${film.img}">
              </picture>
              <div class="cp_tile__body cp_tile__body--without-progress cp_tile__body--without-title-art" aria-hidden="true">
                <div class="cp_tile__overlay">
                  <h2 class="cp_tile__title-text cp_tile__title-text--body">${film.titolo}</h2>
                  <p class="cp_tile__info cp_tile__info--body">
                    <span class="description cp_tile__info--body__description cp_tile__info--body__description--no-content-info cp_tile__linear-layout">${film.descrizione}</span>
                  </p>
                </div>
              </div>
            </div>
            <footer class="cp_tile__footer" aria-hidden="true">
              <h2 class="cp_tile__title-text cp_tile__title-text--footer">${film.titoloFooter}</h2>
              <p class="cp_tile__info cp_tile__info--footer">
                <span class="description cp_tile__info--footer__description cp_tile__info--footer__description--no-content-info cp_tile__linear-layout">${film.descrizioneFooter}</span>
              </p>
            </footer>
          </article>
        </a>
      `).join('');
    })
    .catch(error => console.error('Errore nel caricamento del JSON:', error));
}






<!-- sezione Canali TV -->



  // Funzione per mostrare i dettagli dell'abbonamento
  function moreSettingsContent(element) {
    // Rimuove la classe "active" da tutti i pulsanti
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Aggiunge la classe "active" al pulsante cliccato
    element.classList.add('active');

    var moreSettingsContent = `
    
    
    
    <div style="margin: 110px auto; margin-left: 90px; width: 90%;">
    
<link rel="stylesheet" href="https://brymeteo.github.io/player/decoder/style-film-ondemand.css" data-n-g="">




<div data-testid="standard-grid" class="cp_grid__wrapper standard-grid"><div class="cp_grid cp_section-header cp_grid--justify-space-between cp_grid--align-items-bottom"><div class="cp_grid cp_grid--align-items-center cp_section-header__children"><h1 class="cp_heading cp_heading--subtitle cp_section-header__heading">Diretta canali</h1></div></div>
<div id="tv-programs"></div>

<!-- Modale per la visualizzazione del contenuto fullscreen -->
<div id="program-modal" class="modal">
    <button class="close-btn" onclick="closeModal()">Chiudi</button>
    <iframe id="program-iframe" src="" frameborder="0"></iframe>
</div>

<!-- Guida TV -->
<div id="tv-guide" class="tv-guide">
    <button class="close-btn" onclick="closeGuide()">Chiudi Guida TV</button>
    <iframe id="tv-guide-iframe" src="" frameborder="0"></iframe>
</div>

<br>
<br>
<br>


</div></section></div>
    `;
    document.getElementById('main-content').innerHTML = moreSettingsContent;
  }





<!-- sezione Cartoni Animati -->


 // Funzione per mostrare i dettagli dell'abbonamento
  function yetEvenMoreSettingsContent(element) {
    // Rimuove la classe "active" da tutti i pulsanti
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Aggiunge la classe "active" al pulsante cliccato
    element.classList.add('active');

    var yetEvenMoreSettingsContent = `
    
    
    
   <div style="margin: -530px auto; margin-left: 90px; width: 90%;">
    
<link rel="stylesheet" href="https://brymeteo.github.io/player/decoder/style-film-ondemand.css" data-n-g="">
<div class="cp_grid__wrapper cp_spacing--03-top" data-testid="category-mid-rails-upsell-banner"><picture class="cp_picture" data-testid="free-trial-banner"><source media="(min-width: 1920px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 1280px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 768px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><img alt="Start your 7 day free trial" class="cp_picture__img" src="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"></picture></a></div>



<div data-testid="standard-grid" class="cp_grid__wrapper standard-grid"><div class="cp_grid cp_section-header cp_grid--justify-space-between cp_grid--align-items-bottom"><div class="cp_grid cp_grid--align-items-center cp_section-header__children"><h1 class="cp_heading cp_heading--subtitle cp_section-header__heading">Canali per Bambini digitale terrestre</h1></div></div>

<div id="tv-programs-1"></div>  <!-- Sezione con i canali specifici -->
  <div id="program-modal" class="modal">
    <button class="close-btn" onclick="closeModal()">Chiudi</button>
    <iframe id="program-iframe" src="" frameborder="0"></iframe>
  </div>
<br>
<br>
<br>
<br>

<div data-testid="standard-grid" class="cp_grid__wrapper standard-grid"><div class="cp_grid cp_section-header cp_grid--justify-space-between cp_grid--align-items-bottom"><div class="cp_grid cp_grid--align-items-center cp_section-header__children"><h1 class="cp_heading cp_heading--subtitle cp_section-header__heading">Canali per Bambini Bry OS Premiere</h1></div></div><section class="cp_tile-grid"><div class="cp_tile-grid__items"><a class="cp_link" tabindex="0" href="https://brymeteo.github.io/player/canali-tv-nazionali/canali-zapping/509-Playchannel.html"data-lity><article class="cp_tile cp_tile--grid-standard" aria-label="Reality 24/7. All your fave reality shows 24/7. Live."><div class="cp_tile__body-wrapper"><picture class="cp_picture"><img alt="" class="cp_picture__img" src="https://brymeteo.github.io/player/decoder/immagini/playchannel.png"></picture><div class="cp_tile__body cp_tile__body--without-progress cp_tile__body--without-title-art" aria-hidden="true"><div class="cp_tile__overlay"><h2 class="cp_tile__title-text cp_tile__title-text--body">Cinema 1 HD</h2><div class="cp_tile__tag-list"><div class="cp_tag cp_tag--live cp_tile__tag-item"><br><i class="cp_icon cp_icon__live cp_icon--base cp_tag__icon cp_tag__icon--spacing" aria-hidden="true"><svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M22.09 18.1055C21.6635 17.6643 21.6755 16.9608 22.1167 16.5344C23.0686 15.6144 23.8216 14.5242 24.3347 13.3272C24.8476 12.1302 25.1111 10.8487 25.1111 9.55555C25.1111 8.26235 24.8476 6.98087 24.3347 5.78393C23.8217 4.5869 23.0686 3.49673 22.1167 2.57671C21.6755 2.15025 21.6635 1.44684 22.09 1.00559C22.5164 0.564347 23.2198 0.552364 23.6611 0.978825C24.8228 2.10159 25.7464 3.43656 26.3772 4.90856C27.0081 6.38064 27.3334 7.95981 27.3334 9.55555C27.3334 11.1513 27.0081 12.7305 26.3772 14.2025C25.7464 15.6745 24.8228 17.0095 23.6611 18.1323C23.2198 18.5587 22.5164 18.5467 22.09 18.1055Z" fill="currentColor"></path><path d="M5.88331 2.57672C6.32455 2.15025 6.33653 1.44684 5.91007 1.0056C5.48361 0.564351 4.7802 0.552368 4.33895 0.97883C3.17727 2.10159 2.25368 3.43657 1.62283 4.90856C0.991936 6.38065 0.666687 7.95981 0.666687 9.55555C0.666685 11.1513 0.991934 12.7305 1.62283 14.2025C2.25368 15.6745 3.17727 17.0095 4.33895 18.1323C4.7802 18.5587 5.48361 18.5468 5.91007 18.1055C6.33654 17.6643 6.32455 16.9608 5.88331 16.5344C4.93139 15.6144 4.17839 14.5242 3.66537 13.3272C3.1524 12.1302 2.88891 10.8487 2.88891 9.55555C2.88891 8.26235 3.1524 6.98088 3.66537 5.78394C4.17839 4.5869 4.93139 3.49674 5.88331 2.57672Z" fill="currentColor"></path><path d="M18.7 14.7088C18.3085 14.2362 18.3742 13.5358 18.8468 13.1443C19.4412 12.6519 19.8992 12.0786 20.2065 11.4639C20.5133 10.8504 20.6667 10.2027 20.6667 9.55552C20.6667 8.90838 20.5133 8.26065 20.2065 7.64711C19.8992 7.03249 19.4412 6.45918 18.8468 5.96672C18.3742 5.57524 18.3085 4.8748 18.7 4.40224C19.0914 3.92968 19.7919 3.86396 20.2644 4.25544C21.079 4.93027 21.7388 5.74277 22.1941 6.6533C22.6499 7.56492 22.8889 8.55184 22.8889 9.55552C22.8889 10.5592 22.6499 11.5461 22.1941 12.4577C21.7388 13.3683 21.079 14.1808 20.2644 14.8556C19.7919 15.2471 19.0914 15.1814 18.7 14.7088Z" fill="currentColor"></path><path d="M9.30007 4.4023C9.69155 4.87486 9.62583 5.5753 9.15327 5.96677C8.55881 6.45924 8.10087 7.03254 7.79356 7.64717C7.48679 8.26071 7.33332 8.90844 7.33332 9.55558C7.33332 10.2027 7.48678 10.8504 7.79356 11.464C8.10087 12.0786 8.55881 12.6519 9.15327 13.1444C9.62583 13.5359 9.69155 14.2363 9.30007 14.7089C8.9086 15.1814 8.20816 15.2471 7.7356 14.8557C6.921 14.1808 6.26121 13.3683 5.80594 12.4578C5.35013 11.5462 5.1111 10.5593 5.1111 9.55558C5.1111 8.5519 5.35013 7.56497 5.80594 6.65336C6.26121 5.74282 6.921 4.93033 7.7356 4.25549C8.20816 3.86402 8.9086 3.92974 9.30007 4.4023Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.1111C11.5454 5.1111 9.55558 7.10095 9.55558 9.55555C9.55558 12.0101 11.5454 14 14 14C16.4546 14 18.4445 12.0101 18.4445 9.55555C18.4445 7.10095 16.4546 5.1111 14 5.1111ZM11.7778 9.55555C11.7778 8.32825 12.7727 7.33333 14 7.33333C15.2273 7.33333 16.2222 8.32825 16.2222 9.55555C16.2222 10.7828 15.2273 11.7778 14 11.7778C12.7727 11.7778 11.7778 10.7828 11.7778 9.55555Z" fill="currentColor"></path></svg></i><span class="cp_tag__text-ellipsis" data-testid="tag-content">Live</span></div></div><p class="cp_tile__info cp_tile__info--body"><span class="description cp_tile__info--body__description cp_tile__info--body__description--no-content-info cp_tile__linear-layout">Diretta canale per ragazzi</span></p></div></div></div><footer class="cp_tile__footer" aria-hidden="true"><h2 class="cp_tile__title-text cp_tile__title-text--footer">Reality 24/7</h2><p class="cp_tile__info cp_tile__info--footer"><span class="description cp_tile__info--footer__description cp_tile__info--footer__description--no-content-info cp_tile__linear-layout">PlayChannel HD</span></p></footer></article></a>








<a class="cp_link" tabindex="0" href="https://brymeteo.github.io/player/canali-tv-nazionali/canali-zapping/508-Playtoon.html"data-lity><article class="cp_tile cp_tile--grid-standard" aria-label="Reality 24/7. All your fave reality shows 24/7. Live."><div class="cp_tile__body-wrapper"><picture class="cp_picture"><img alt="" class="cp_picture__img" src="https://brymeteo.github.io/player/decoder/immagini/playjunior.png"></picture><div class="cp_tile__body cp_tile__body--without-progress cp_tile__body--without-title-art" aria-hidden="true"><div class="cp_tile__overlay"><h2 class="cp_tile__title-text cp_tile__title-text--body">Cinema 1 HD</h2><div class="cp_tile__tag-list"><div class="cp_tag cp_tag--live cp_tile__tag-item"><br><i class="cp_icon cp_icon__live cp_icon--base cp_tag__icon cp_tag__icon--spacing" aria-hidden="true"><svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M22.09 18.1055C21.6635 17.6643 21.6755 16.9608 22.1167 16.5344C23.0686 15.6144 23.8216 14.5242 24.3347 13.3272C24.8476 12.1302 25.1111 10.8487 25.1111 9.55555C25.1111 8.26235 24.8476 6.98087 24.3347 5.78393C23.8217 4.5869 23.0686 3.49673 22.1167 2.57671C21.6755 2.15025 21.6635 1.44684 22.09 1.00559C22.5164 0.564347 23.2198 0.552364 23.6611 0.978825C24.8228 2.10159 25.7464 3.43656 26.3772 4.90856C27.0081 6.38064 27.3334 7.95981 27.3334 9.55555C27.3334 11.1513 27.0081 12.7305 26.3772 14.2025C25.7464 15.6745 24.8228 17.0095 23.6611 18.1323C23.2198 18.5587 22.5164 18.5467 22.09 18.1055Z" fill="currentColor"></path><path d="M5.88331 2.57672C6.32455 2.15025 6.33653 1.44684 5.91007 1.0056C5.48361 0.564351 4.7802 0.552368 4.33895 0.97883C3.17727 2.10159 2.25368 3.43657 1.62283 4.90856C0.991936 6.38065 0.666687 7.95981 0.666687 9.55555C0.666685 11.1513 0.991934 12.7305 1.62283 14.2025C2.25368 15.6745 3.17727 17.0095 4.33895 18.1323C4.7802 18.5587 5.48361 18.5468 5.91007 18.1055C6.33654 17.6643 6.32455 16.9608 5.88331 16.5344C4.93139 15.6144 4.17839 14.5242 3.66537 13.3272C3.1524 12.1302 2.88891 10.8487 2.88891 9.55555C2.88891 8.26235 3.1524 6.98088 3.66537 5.78394C4.17839 4.5869 4.93139 3.49674 5.88331 2.57672Z" fill="currentColor"></path><path d="M18.7 14.7088C18.3085 14.2362 18.3742 13.5358 18.8468 13.1443C19.4412 12.6519 19.8992 12.0786 20.2065 11.4639C20.5133 10.8504 20.6667 10.2027 20.6667 9.55552C20.6667 8.90838 20.5133 8.26065 20.2065 7.64711C19.8992 7.03249 19.4412 6.45918 18.8468 5.96672C18.3742 5.57524 18.3085 4.8748 18.7 4.40224C19.0914 3.92968 19.7919 3.86396 20.2644 4.25544C21.079 4.93027 21.7388 5.74277 22.1941 6.6533C22.6499 7.56492 22.8889 8.55184 22.8889 9.55552C22.8889 10.5592 22.6499 11.5461 22.1941 12.4577C21.7388 13.3683 21.079 14.1808 20.2644 14.8556C19.7919 15.2471 19.0914 15.1814 18.7 14.7088Z" fill="currentColor"></path><path d="M9.30007 4.4023C9.69155 4.87486 9.62583 5.5753 9.15327 5.96677C8.55881 6.45924 8.10087 7.03254 7.79356 7.64717C7.48679 8.26071 7.33332 8.90844 7.33332 9.55558C7.33332 10.2027 7.48678 10.8504 7.79356 11.464C8.10087 12.0786 8.55881 12.6519 9.15327 13.1444C9.62583 13.5359 9.69155 14.2363 9.30007 14.7089C8.9086 15.1814 8.20816 15.2471 7.7356 14.8557C6.921 14.1808 6.26121 13.3683 5.80594 12.4578C5.35013 11.5462 5.1111 10.5593 5.1111 9.55558C5.1111 8.5519 5.35013 7.56497 5.80594 6.65336C6.26121 5.74282 6.921 4.93033 7.7356 4.25549C8.20816 3.86402 8.9086 3.92974 9.30007 4.4023Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.1111C11.5454 5.1111 9.55558 7.10095 9.55558 9.55555C9.55558 12.0101 11.5454 14 14 14C16.4546 14 18.4445 12.0101 18.4445 9.55555C18.4445 7.10095 16.4546 5.1111 14 5.1111ZM11.7778 9.55555C11.7778 8.32825 12.7727 7.33333 14 7.33333C15.2273 7.33333 16.2222 8.32825 16.2222 9.55555C16.2222 10.7828 15.2273 11.7778 14 11.7778C12.7727 11.7778 11.7778 10.7828 11.7778 9.55555Z" fill="currentColor"></path></svg></i><span class="cp_tag__text-ellipsis" data-testid="tag-content">Live</span></div></div><p class="cp_tile__info cp_tile__info--body"><span class="description cp_tile__info--body__description cp_tile__info--body__description--no-content-info cp_tile__linear-layout">Diretta canale per bambini</span></p></div></div></div><footer class="cp_tile__footer" aria-hidden="true"><h2 class="cp_tile__title-text cp_tile__title-text--footer">Reality 24/7</h2><p class="cp_tile__info cp_tile__info--footer"><span class="description cp_tile__info--footer__description cp_tile__info--footer__description--no-content-info cp_tile__linear-layout">PlayJunior HD</span></p></footer></article></a>





<a class="cp_link" tabindex="0" href="https://brymeteo.github.io/player/canali-tv-nazionali/canali-zapping/510-Mrbean.html"data-lity><article class="cp_tile cp_tile--grid-standard" aria-label="Reality 24/7. All your fave reality shows 24/7. Live."><div class="cp_tile__body-wrapper"><picture class="cp_picture"><img alt="" class="cp_picture__img" src="https://brymeteo.github.io/player/decoder/immagini/mr.bean.jpg"></picture><div class="cp_tile__body cp_tile__body--without-progress cp_tile__body--without-title-art" aria-hidden="true"><div class="cp_tile__overlay"><h2 class="cp_tile__title-text cp_tile__title-text--body">Cinema 1 HD</h2><div class="cp_tile__tag-list"><div class="cp_tag cp_tag--live cp_tile__tag-item"><br><i class="cp_icon cp_icon__live cp_icon--base cp_tag__icon cp_tag__icon--spacing" aria-hidden="true"><svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M22.09 18.1055C21.6635 17.6643 21.6755 16.9608 22.1167 16.5344C23.0686 15.6144 23.8216 14.5242 24.3347 13.3272C24.8476 12.1302 25.1111 10.8487 25.1111 9.55555C25.1111 8.26235 24.8476 6.98087 24.3347 5.78393C23.8217 4.5869 23.0686 3.49673 22.1167 2.57671C21.6755 2.15025 21.6635 1.44684 22.09 1.00559C22.5164 0.564347 23.2198 0.552364 23.6611 0.978825C24.8228 2.10159 25.7464 3.43656 26.3772 4.90856C27.0081 6.38064 27.3334 7.95981 27.3334 9.55555C27.3334 11.1513 27.0081 12.7305 26.3772 14.2025C25.7464 15.6745 24.8228 17.0095 23.6611 18.1323C23.2198 18.5587 22.5164 18.5467 22.09 18.1055Z" fill="currentColor"></path><path d="M5.88331 2.57672C6.32455 2.15025 6.33653 1.44684 5.91007 1.0056C5.48361 0.564351 4.7802 0.552368 4.33895 0.97883C3.17727 2.10159 2.25368 3.43657 1.62283 4.90856C0.991936 6.38065 0.666687 7.95981 0.666687 9.55555C0.666685 11.1513 0.991934 12.7305 1.62283 14.2025C2.25368 15.6745 3.17727 17.0095 4.33895 18.1323C4.7802 18.5587 5.48361 18.5468 5.91007 18.1055C6.33654 17.6643 6.32455 16.9608 5.88331 16.5344C4.93139 15.6144 4.17839 14.5242 3.66537 13.3272C3.1524 12.1302 2.88891 10.8487 2.88891 9.55555C2.88891 8.26235 3.1524 6.98088 3.66537 5.78394C4.17839 4.5869 4.93139 3.49674 5.88331 2.57672Z" fill="currentColor"></path><path d="M18.7 14.7088C18.3085 14.2362 18.3742 13.5358 18.8468 13.1443C19.4412 12.6519 19.8992 12.0786 20.2065 11.4639C20.5133 10.8504 20.6667 10.2027 20.6667 9.55552C20.6667 8.90838 20.5133 8.26065 20.2065 7.64711C19.8992 7.03249 19.4412 6.45918 18.8468 5.96672C18.3742 5.57524 18.3085 4.8748 18.7 4.40224C19.0914 3.92968 19.7919 3.86396 20.2644 4.25544C21.079 4.93027 21.7388 5.74277 22.1941 6.6533C22.6499 7.56492 22.8889 8.55184 22.8889 9.55552C22.8889 10.5592 22.6499 11.5461 22.1941 12.4577C21.7388 13.3683 21.079 14.1808 20.2644 14.8556C19.7919 15.2471 19.0914 15.1814 18.7 14.7088Z" fill="currentColor"></path><path d="M9.30007 4.4023C9.69155 4.87486 9.62583 5.5753 9.15327 5.96677C8.55881 6.45924 8.10087 7.03254 7.79356 7.64717C7.48679 8.26071 7.33332 8.90844 7.33332 9.55558C7.33332 10.2027 7.48678 10.8504 7.79356 11.464C8.10087 12.0786 8.55881 12.6519 9.15327 13.1444C9.62583 13.5359 9.69155 14.2363 9.30007 14.7089C8.9086 15.1814 8.20816 15.2471 7.7356 14.8557C6.921 14.1808 6.26121 13.3683 5.80594 12.4578C5.35013 11.5462 5.1111 10.5593 5.1111 9.55558C5.1111 8.5519 5.35013 7.56497 5.80594 6.65336C6.26121 5.74282 6.921 4.93033 7.7356 4.25549C8.20816 3.86402 8.9086 3.92974 9.30007 4.4023Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.1111C11.5454 5.1111 9.55558 7.10095 9.55558 9.55555C9.55558 12.0101 11.5454 14 14 14C16.4546 14 18.4445 12.0101 18.4445 9.55555C18.4445 7.10095 16.4546 5.1111 14 5.1111ZM11.7778 9.55555C11.7778 8.32825 12.7727 7.33333 14 7.33333C15.2273 7.33333 16.2222 8.32825 16.2222 9.55555C16.2222 10.7828 15.2273 11.7778 14 11.7778C12.7727 11.7778 11.7778 10.7828 11.7778 9.55555Z" fill="currentColor"></path></svg></i><span class="cp_tag__text-ellipsis" data-testid="tag-content">Live</span></div></div><p class="cp_tile__info cp_tile__info--body"><span class="description cp_tile__info--body__description cp_tile__info--body__description--no-content-info cp_tile__linear-layout">Diretta canale numero 510</span></p></div></div></div><footer class="cp_tile__footer" aria-hidden="true"><h2 class="cp_tile__title-text cp_tile__title-text--footer">Reality 24/7</h2><p class="cp_tile__info cp_tile__info--footer"><span class="description cp_tile__info--footer__description cp_tile__info--footer__description--no-content-info cp_tile__linear-layout">Mr.Bean Channel HD</span></p></footer></article></a>







</div></section></div>




  `;
    document.getElementById('main-content').innerHTML = yetEvenMoreSettingsContent;
  }


<!-- sezione Assistenza e risorse -->


  function newSubscriptionFunction() {
  let content = `
  
        <div style="margin: 200px auto; margin-left: 90px; width: 90%;">
<link rel="stylesheet" href="https://brymeteo.github.io/player/decoder/style-film-ondemand.css" data-n-g="">



<div class="cp_grid__wrapper cp_spacing--03-top" data-testid="category-mid-rails-upsell-banner"></a></div>

    <div data-testid="standard-grid" class="cp_grid__wrapper standard-grid">
      <div class="cp_grid cp_section-header cp_grid--justify-space-between cp_grid--align-items-bottom">
        <div class="cp_grid cp_grid--align-items-center cp_section-header__children">
          <h1 class="cp_heading cp_heading--subtitle cp_section-header__heading">Home Assistenza</h1>
        </div>
      </div>
      <section class="cp_tile-grid">
        <div id="cards-container" class="cp_tile-grid__items"></div>
      </section>
    </div>
  `;
  
  document.getElementById('main-content').innerHTML = content;

  // Carica il file JSON e genera le card
  fetch('https://brymeteo.github.io/player/decoder/Generi/sezione-assistenza.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('cards-container');
      container.innerHTML = data.map(film => `
        <a class="cp_link" tabindex="0" href="${film.link}" data-lity>
          <article class="cp_tile cp_tile--grid-standard" aria-label="${film.ariaLabel}">
            <div class="cp_tile__body-wrapper">
              <picture class="cp_picture">
                <img alt="" class="cp_picture__img" src="${film.img}">
              </picture>
              <div class="cp_tile__body cp_tile__body--without-progress cp_tile__body--without-title-art" aria-hidden="true">
                <div class="cp_tile__overlay">
                  <h2 class="cp_tile__title-text cp_tile__title-text--body">${film.titolo}</h2>
                  <p class="cp_tile__info cp_tile__info--body">
                    <span class="description cp_tile__info--body__description cp_tile__info--body__description--no-content-info cp_tile__linear-layout">${film.descrizione}</span>
                  </p>
                </div>
              </div>
            </div>
            <footer class="cp_tile__footer" aria-hidden="true">
              <h2 class="cp_tile__title-text cp_tile__title-text--footer">${film.titoloFooter}</h2>
              <p class="cp_tile__info cp_tile__info--footer">
                <span class="description cp_tile__info--footer__description cp_tile__info--footer__description--no-content-info cp_tile__linear-layout">${film.descrizioneFooter}</span>
              </p>
            </footer>
          </article>
        </a>
      `).join('');
    })
    .catch(error => console.error('Errore nel caricamento del JSON:', error));
}



<!-- sezione cinema -->

  
   function nuovaFunzioneAbbonamento() {
  let content = `
  
        <div style="margin: -350px auto; margin-left: 90px; width: 90%;">
<link rel="stylesheet" href="https://brymeteo.github.io/player/decoder/style-film-ondemand.css" data-n-g="">



<div class="cp_grid__wrapper cp_spacing--03-top" data-testid="category-mid-rails-upsell-banner"><picture class="cp_picture" data-testid="free-trial-banner"><source media="(min-width: 1920px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 1280px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 768px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><img alt="Start your 7 day free trial" class="cp_picture__img" src="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"></picture></a></div>

    <div data-testid="standard-grid" class="cp_grid__wrapper standard-grid">
      <div class="cp_grid cp_section-header cp_grid--justify-space-between cp_grid--align-items-bottom">
        <div class="cp_grid cp_grid--align-items-center cp_section-header__children">
          <h1 class="cp_heading cp_heading--subtitle cp_section-header__heading">Catalogo Film</h1>
        </div>
      </div>
      <section class="cp_tile-grid">
        <div id="cards-container" class="cp_tile-grid__items"></div>
      </section>
    </div>
  `;
  
  document.getElementById('main-content').innerHTML = content;

  // Carica il file JSON e genera le card
  fetch('https://brymeteo.github.io/player/decoder/Generi/sezione-cinema.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('cards-container');
      container.innerHTML = data.map(film => `
        <a class="cp_link" tabindex="0" href="${film.link}" data-lity>
          <article class="cp_tile cp_tile--grid-standard" aria-label="${film.ariaLabel}">
            <div class="cp_tile__body-wrapper">
              <picture class="cp_picture">
                <img alt="" class="cp_picture__img" src="${film.img}">
              </picture>
              <div class="cp_tile__body cp_tile__body--without-progress cp_tile__body--without-title-art" aria-hidden="true">
                <div class="cp_tile__overlay">
                  <h2 class="cp_tile__title-text cp_tile__title-text--body">${film.titolo}</h2>
                  <p class="cp_tile__info cp_tile__info--body">
                    <span class="description cp_tile__info--body__description cp_tile__info--body__description--no-content-info cp_tile__linear-layout">${film.descrizione}</span>
                  </p>
                </div>
              </div>
            </div>
            <footer class="cp_tile__footer" aria-hidden="true">
              <h2 class="cp_tile__title-text cp_tile__title-text--footer">${film.titoloFooter}</h2>
              <p class="cp_tile__info cp_tile__info--footer">
                <span class="description cp_tile__info--footer__description cp_tile__info--footer__description--no-content-info cp_tile__linear-layout">${film.descrizioneFooter}</span>
              </p>
            </footer>
          </article>
        </a>
      `).join('');
    })
    .catch(error => console.error('Errore nel caricamento del JSON:', error));
}




<!-- sezione Bambini -->

 function customizeSettingsContent() {
  let content = `
     <div style="margin: -390px auto; margin-left: 90px; width: 90%;">


<link rel="stylesheet" href="https://brymeteo.github.io/player/decoder/style-film-ondemand.css" data-n-g="">

<div class="cp_grid__wrapper cp_spacing--03-top" data-testid="category-mid-rails-upsell-banner"><picture class="cp_picture" data-testid="free-trial-banner"><source media="(min-width: 1920px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 1280px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 768px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><img alt="Start your 7 day free trial" class="cp_picture__img" src="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"></picture></a></div>


   
    <div data-testid="standard-grid" class="cp_grid__wrapper standard-grid">
      <div class="cp_grid cp_section-header cp_grid--justify-space-between cp_grid--align-items-bottom">
        <div class="cp_grid cp_grid--align-items-center cp_section-header__children">
          <h1 class="cp_heading cp_heading--subtitle cp_section-header__heading">Cartoni Animati</h1>
        </div>
      </div>
      <section class="cp_tile-grid">
        <div id="cards-container" class="cp_tile-grid__items"></div>
      </section>
    </div>
  `;
  
  document.getElementById('main-content').innerHTML = content;

  // Carica il file JSON e genera le card
  fetch('https://brymeteo.github.io/player/decoder/Generi/sezione-bambini.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('cards-container');
      container.innerHTML = data.map(film => `
        <a class="cp_link" tabindex="0" href="${film.link}" data-lity>
          <article class="cp_tile cp_tile--grid-standard" aria-label="${film.ariaLabel}">
            <div class="cp_tile__body-wrapper">
              <picture class="cp_picture">
                <img alt="" class="cp_picture__img" src="${film.img}">
              </picture>
              <div class="cp_tile__body cp_tile__body--without-progress cp_tile__body--without-title-art" aria-hidden="true">
                <div class="cp_tile__overlay">
                  <h2 class="cp_tile__title-text cp_tile__title-text--body">${film.titolo}</h2>
                  <p class="cp_tile__info cp_tile__info--body">
                    <span class="description cp_tile__info--body__description cp_tile__info--body__description--no-content-info cp_tile__linear-layout">${film.descrizione}</span>
                  </p>
                </div>
              </div>
            </div>
            <footer class="cp_tile__footer" aria-hidden="true">
              <h2 class="cp_tile__title-text cp_tile__title-text--footer">${film.titoloFooter}</h2>
              <p class="cp_tile__info cp_tile__info--footer">
                <span class="description cp_tile__info--footer__description cp_tile__info--footer__description--no-content-info cp_tile__linear-layout">${film.descrizioneFooter}</span>
              </p>
            </footer>
          </article>
        </a>
      `).join('');
    })
    .catch(error => console.error('Errore nel caricamento del JSON:', error));
}



<!-- sezione my vox -->
// Funzione per mostrare i dettagli dell'abbonamento
  function showSubscriptionDetails(element) {
    // Rimuove la classe "active" da tutti i pulsanti
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Aggiunge la classe "active" al pulsante cliccato
    element.classList.add('active');

    var subscriptionDetails = `
     <div style="margin: 230px auto; margin-left: 110px; width: 90%;">
<div style="background-image: url('https://brymeteo.github.io/player/decoder/immagini/television-background-1.png'); background-size: cover; padding: 20px; border-radius: 15px; color: white; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); position: relative;">
                    <h2 style="font-size: 28px; margin-bottom: 20px;">Dettagli Abbonamento</h2>
                    <div style="font-size: 19px; text-align: left;">
                        <p><strong>ID Codice cliente:</strong> xx55gd3iy</p>
                        <p><strong>Nome Utente:</strong> Bryan</p>
                        <p><strong>Tipo di Abbonamento:</strong> Premium</p>
                        <p><strong>Data di Scadenza:</strong> 10/06/2025</p>
                        <p><strong>ID Personale:</strong> XYZ567</p>
                        <p><strong>Pin Attivazione Smart card:</strong> XYZ12345fs</p>
                        <!-- Aggiungi altri dettagli dell'account o contrattuali secondo necessità -->
                    </div>
                    <img src="https://i.ibb.co/0XtvkBs/Vox-OSdecoder3-logo-TRASPARENTE.png" alt="Logo" style="position: absolute; top: 50%; right: 90px; transform: translateY(-50%); height: 50px; width: auto;">
                </div>



    `;
    document.getElementById('main-content').innerHTML = subscriptionDetails;
  }







<!-- sezione Impostazioni di my vox -->
// Funzione per mostrare i dettagli dell'abbonamento
  function modifySettingsDisplay(element) {
    // Rimuove la classe "active" da tutti i pulsanti
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Aggiunge la classe "active" al pulsante cliccato
    element.classList.add('active');

    var modifySettingsDisplay = `
     <div style="margin: 230px auto; margin-left: 110px; width: 90%;">
<style>
    .container {
      text-align: center;
    }
    .indicator {
      font-size: 28px;
      color: #f3f3f3;
      opacity: 70%;
      padding-left: 10px;
      vertical-align: middle;
      float: right;
    }
    .separator {
      width: 1200px;
      height: 2px;
      background-color: black;
      margin: 15px auto;
      box-shadow: 0 0 20px rgba(134 95 172.7);
      background-color: rgba(0, 191, 255, 0.1);
    }
    h1 {
      text-align: left;
      vertical-align: middle;
      margin: 0;
      padding-left: 10px;
      color: #f3f3f3;
    }
    .popup-container {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      padding: 20px;
      border: 2px solid #f5f5f5;
      z-index: 1000;
      box-shadow: 0 0 20px rgba(134 95 172, 0.7);
      background-color: rgba(5, 25, 65, 1.1);
    }
    /* Stile per i link testuali cliccabili */
    .action-link span {
      color: #cfcfcf;
      font-size: 25px;
      cursor: pointer;
    }
    /* Stile per il messaggio del popup in bianco */
    #notification-message {
      color: #fff;
    }
  </style>
</head>
<body>
   <div class="container">
    <div class="separator"></div>
    <div class="indicator">&#10003;</div>
    <h1 style="text-align: left;"><span style="color: #f3f3f3; font-size: 25px;">My Bry Full HD</span></h1>
    <div class="separator"></div>
    <div class="indicator">&#10003;</div>
    <h1 style="text-align: left;"><span style="color: #f3f3f3; font-size: 25px;">Connessione di rete</span></h1>
    <div class="separator"></div>
    <div class="indicator">&#10003;</div>
    <h1 style="text-align: left;"><span style="color: #f3f3f3; font-size: 25px;">Segnale Satellitare</span></h1>
    <div class="separator"></div>
    <h1 id="decoder-status" style="text-align: left;"><span style="color: #cfcfcf; font-size: 25px;">Versione Bry OSDecoder 6.3</span></h1>
    <div class="separator"></div>
    <h1 id="update-label" style="text-align: left;"><span style="color: #cfcfcf; font-size: 25px; cursor: pointer;" onclick="startUpdate()">Verifica Aggiornamenti</span></h1>
    <div class="separator"></div>
    <div class="popup-container" id="update-popup">
      <h2 style="text-align: center;"><span style="color: #f3f3f3;">Aggiornamento in corso...</span></h2>
      <div style="text-align:center;">
        <div id="progress-bar" style="width: 300px; height: 20px; background-color: lightgray; border: 1px solid black; margin: 0 auto;">
          <div id="progress" style="width: 0%; height: 100%; background-color: #547ac7;"></div>
        </div>
        <p><span style="color: #f3f3f3;">Non chiudere questa pagina, ci vorrà qualche istante per l'aggiornamento.</span></p>
      </div>
    </div>
    
    <!-- Link testuali per le azioni di svuotamento e ricaricamento -->
    <h1 id="clear-storage" class="action-link">
      <span onclick="clearLocalStorage()">Svuota LocalStorage</span>
    </h1>
    <div class="separator"></div>
    <h1 id="clear-session" class="action-link">
      <span onclick="clearSessionStorage()">Svuota SessionStorage</span>
    </h1>
    <div class="separator"></div>
    <h1 id="force-reload" class="action-link">
      <span onclick="forceReload()">Forza Ricaricamento</span>
    </h1>
    <div class="separator"></div>
    <!-- Popup notifica -->
    <div class="popup-container" id="notification-popup">
      <h2 id="notification-message" style="text-align: center;"></h2>
    </div>
  </div>



    `;
    document.getElementById('main-content').innerHTML = modifySettingsDisplay;
  }





<!-- sezione App e Servizi -->
 function updateSettingsUI() {
  let content = `
     <div style="margin: -390px auto; margin-left: 90px; width: 90%;">


<link rel="stylesheet" href="https://brymeteo.github.io/player/decoder/style-film-ondemand.css" data-n-g="">

<div class="cp_grid__wrapper cp_spacing--03-top" data-testid="category-mid-rails-upsell-banner"><picture class="cp_picture" data-testid="free-trial-banner"><source media="(min-width: 1920px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 1280px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><source media="(min-width: 768px)" srcset="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"><img alt="Start your 7 day free trial" class="cp_picture__img" src="https://brymeteo.github.io/player/decoder/immagini/output-onlinepngtools-1.png"></picture></a></div>


   
    <div data-testid="standard-grid" class="cp_grid__wrapper standard-grid">
      <div class="cp_grid cp_section-header cp_grid--justify-space-between cp_grid--align-items-bottom">
        <div class="cp_grid cp_grid--align-items-center cp_section-header__children">
          <h1 class="cp_heading cp_heading--subtitle cp_section-header__heading">App</h1>
        </div>
      </div>
      <section class="cp_tile-grid">
        <div id="cards-container" class="cp_tile-grid__items"></div>
      </section>
    </div>
  `;
  
  document.getElementById('main-content').innerHTML = content;

  // Carica il file JSON e genera le card
  fetch('https://brymeteo.github.io/player/decoder/Generi/sezione-app.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('cards-container');
      container.innerHTML = data.map(film => `
        <a class="cp_link" tabindex="0" href="${film.link}" data-lity>
          <article class="cp_tile cp_tile--grid-standard" aria-label="${film.ariaLabel}">
            <div class="cp_tile__body-wrapper">
              <picture class="cp_picture">
                <img alt="" class="cp_picture__img" src="${film.img}">
              </picture>
              <div class="cp_tile__body cp_tile__body--without-progress cp_tile__body--without-title-art" aria-hidden="true">
                <div class="cp_tile__overlay">
                  <h2 class="cp_tile__title-text cp_tile__title-text--body">${film.titolo}</h2>
                  <p class="cp_tile__info cp_tile__info--body">
                    <span class="description cp_tile__info--body__description cp_tile__info--body__description--no-content-info cp_tile__linear-layout">${film.descrizione}</span>
                  </p>
                </div>
              </div>
            </div>
            <footer class="cp_tile__footer" aria-hidden="true">
              <h2 class="cp_tile__title-text cp_tile__title-text--footer">${film.titoloFooter}</h2>
              <p class="cp_tile__info cp_tile__info--footer">
                <span class="description cp_tile__info--footer__description cp_tile__info--footer__description--no-content-info cp_tile__linear-layout">${film.descrizioneFooter}</span>
              </p>
            </footer>
          </article>
        </a>
      `).join('');
    })
    .catch(error => console.error('Errore nel caricamento del JSON:', error));
}



<!-- sezione Guida TV -->


  // Funzione per mostrare i dettagli dell'abbonamento
  function updateCustomization(element) {
    // Rimuove la classe "active" da tutti i pulsanti
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Aggiunge la classe "active" al pulsante cliccato
    element.classList.add('active');

    var updateCustomization = `
     <div style="margin: -19px auto; margin-left: 51px;">
<link rel="stylesheet" href="https://brymeteo.github.io/player/decoder/style-film-ondemand.css" data-n-g="">


 <iframe src="https://brymeteo.github.io/player/decoder/stili-dec/guida-tv-ora-legale.html" width="101.7%" height="3240px" frameborder="0" scrolling="no"></iframe>     
              


</div></section></div>




    `;
    document.getElementById('main-content').innerHTML = updateCustomization;
  }

  
<!-- sezione Film Ondemand -->
 // Funzione per mostrare i dettagli dell'abbonamento
  function updateTVGuide(element) {
    // Rimuove la classe "active" da tutti i pulsanti
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Aggiunge la classe "active" al pulsante cliccato
    element.classList.add('active');

    var updateTVGuide = `
     <div style="margin: -21px auto; margin-left: 50px; ">
<link rel="stylesheet" href="https://brymeteo.github.io/player/decoder/style-film-ondemand.css" data-n-g="">


                    
<iframe src="https://brymeteo.github.io/player/decoder/Generi/sezione-film-ondemand.html" width="101.8%" height="3240px" frameborder="0" scrolling="no" allow="fullscreen" allowfullscreen=""></iframe>     
              

</div></section></div>

 `;
    document.getElementById('main-content').innerHTML = updateTVGuide;
  }


function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'})}window.onscroll=function(){scrollFunction()};function scrollFunction(){if(document.body.scrollTop>20||document.documentElement.scrollTop>20){document.getElementById("scroll-to-top").style.display="block"}else{document.getElementById("scroll-to-top").style.display="none"}}
