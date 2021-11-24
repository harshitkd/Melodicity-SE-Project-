import "./custom-carousel.css";

export default function Carousel() {
  return (
      <div className='carousel-container'>
            <div class="carousel">
              <div className='carousel-item'>
                <h1 className='carousel-upper-heading'>Publish</h1>
                <h1 className='carousel-lower-heading'>your song hassle-free</h1>
                <p className="carousel-desc">Every artist deserves a stage. Melodicity is the place where you can share your song with people.</p>
              </div>
              <div className='carousel-item'>
                <h1 className='carousel-upper-heading'>Make Playlists</h1>
                <h1 className='carousel-lower-heading'>to never loose your favorites</h1>
                <p className="carousel-desc">Heard a song before but forgot the name now, save all you favorites in your personal playlist.</p>
              </div>
              <div className='carousel-item'>
                <h1 className='carousel-upper-heading'>Rate Songs</h1>
                <h1 className='carousel-lower-heading'>so that artists get feedback</h1>
                <p className="carousel-desc">Rating gives us your music taste, so that we can improve our recommendation. It also tell artists how well their song is recieved.</p>
              </div>
              <div className='carousel-item'>
                <h1 className='carousel-upper-heading'>No limits</h1>
                <h1 className='carousel-lower-heading'>unlimited genres</h1>
                <p className="carousel-desc">Melodicity is the city of melodies. It lets Artists to publish any genre of music, thus giving listeners a vast collection of songs.</p>
              </div>
            </div>
        </div>
  );
}


