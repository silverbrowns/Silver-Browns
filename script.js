<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 },
    "size": { "value": 2 },
    "color": { "value": ["#ff6ec7", "#a64dff", "#ffffff"] },  // pink, purple, white
    "opacity": { "value": 0.7 },
    "line_linked": { "enable": false },
    "move": { "speed": 0.5 }
  },
  "interactivity": {
    "event": { "onhover": { "enable": false } }
  }
});

const music = document.getElementById( 'bg-music' );
          const toggleBtn = document.getElementById( 'music-toggle' );

          toggleBtn.addEventListener( 'click', () => {
              if (music.paused) {
                  music.play();   
                  toggleBtn.textContent = 'Pause Music' ;
               } else {
                  music.pause();
                  toggleBtn.textContent = 'Play Music' ;
               }
          });



