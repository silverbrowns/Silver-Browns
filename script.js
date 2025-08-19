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
