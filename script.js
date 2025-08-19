particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 },
    "size": { "value": 2 },
    "color": { "value": "#ffffff" },  //white particles
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

