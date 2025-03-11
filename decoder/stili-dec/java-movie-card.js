  document.addEventListener('DOMContentLoaded', function() {
      const heroSection = document.getElementById('heroSection');
      const heroTitle = document.querySelector('.hero-title');
      const heroRating = document.querySelector('.hero-rating');
      const heroMetadata = document.querySelector('.hero-metadata');
      const heroDescription = document.querySelector('.hero-description');
      const heroBackground = document.getElementById('heroBackground');
      const movieCards = document.querySelectorAll('.movie-card');
      
      // Set initial background image for the hero
      const defaultCard = document.querySelector('.movie-card.active');
      updateHeroSection(defaultCard);
      
      // Function to update hero section with movie data
      function updateHeroSection(card) {
        const title = card.getAttribute('data-title');
        const rating = card.getAttribute('data-rating');
        const duration = card.getAttribute('data-duration');
        const badges = card.getAttribute('data-badges').split(',');
        const description = card.getAttribute('data-description');
        const imageUrl = card.getAttribute('data-image');
        
        // Update hero content
        heroTitle.textContent = title;
        heroRating.innerHTML = `<span class="star-rating">${rating}</span> ${duration}`;
        
        // Update metadata badges
        heroMetadata.innerHTML = '';
        badges.forEach(badge => {
          const span = document.createElement('span');
          span.className = 'metadata-badge';
          span.textContent = badge;
          heroMetadata.appendChild(span);
        });
        
        heroDescription.textContent = description;
        
        // Set the background image for the entire hero section
        heroBackground.style.backgroundImage = `url('${imageUrl}')`;
      }
      
      // Add click event listener to all movie cards
      movieCards.forEach(card => {
        card.addEventListener('click', function() {
          // Remove active class from all cards
          movieCards.forEach(c => c.classList.remove('active'));
          
          // Add active class to clicked card
          this.classList.add('active');
          
          // Update hero section with clicked card's data
          updateHeroSection(this);
          
          // Scroll to top to show hero section
          window.scrollTo({top: 0, behavior: 'smooth'});
        });
      });
      
      // Navigation arrows functionality
      const leftArrows = document.querySelectorAll('.nav-arrow.left');
      const rightArrows = document.querySelectorAll('.nav-arrow.right');
      
      leftArrows.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
          e.stopPropagation();
          const container = this.parentElement;
          container.scrollBy({left: -200, behavior: 'smooth'});
        });
      });
      
      rightArrows.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
          e.stopPropagation();
          const container = this.parentElement;
          container.scrollBy({left: 200, behavior: 'smooth'});
        });
      });
    });
