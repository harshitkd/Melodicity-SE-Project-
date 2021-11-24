import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
// import Carousel from '../../components/carousel/Carousel'
import { useSelector} from 'react-redux'

const Home = () => {
  const [currentDisplaySongNumber, setCurrentDisplaySongNumber] = useState(0);
  const section = useRef(null)
  const songCover = "../../assets/album-art.jpg";
  const isCreator = useSelector(state => state?.auth?.isCreator)

  useEffect(() => {
    function castParallax() {
        window.addEventListener("scroll", function (e) {
            var top = this.scrollY;
            var layers = document.getElementsByClassName("parallax");
            var layer, speed, yPos;
            for (var i = 0; i < layers.length; i++) {
                layer = layers[i];
                speed = layer.getAttribute('data-speed');
                yPos = -(top * speed / 100);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
            }
        });
    }
    castParallax();
}, [])


  const cardDisplaySongs = [
    {
      songArt: "distance.jpg",
      songName: "Distance",
      songDesc: "Distance is the song interpreted by oneRepublic, released on the album human in 2021.",
    },
    {
      songArt: "prateek-kuhad.jpg",
      songName: "Sheheron ke Raaz",
      songDesc: "Shehron Ke Raaz is the latest Hindi song written by Prateek Kuhad.",
    },
    {
      songArt: "rangi-sari.jpg",
      songName: "Rangi Sari",
      songDesc: "Rangi Saari, a traditional thumri, symbolizes love and all its playful mischiefs with the beloved. ",
    },
  ];

  return (
    <div className='home-page'>
      <Navbar />
      <div className="songcover-bg" style={{ backgroundImage: `url(${cardDisplaySongs[currentDisplaySongNumber].songArt})` }} />
      {/*dynamically change the background */}
      <div className="bg-blur" />
      <div className="home d-flex flex-column">
        <div className="home-bg-spot-1"></div>
        {/* <div className="home-bg-spot-2"></div> */}
        <div className="h1 d-flex">
          <div className="h1-bg"></div>
          <div className="h1-content d-flex align-items-center">
            <div className="d-flex flex-column h1-header flex-column">
              <span>Music you need</span>
                <div className="h1-button" onClick={()=> section.current.scrollIntoView()}>
                  Explore
                </div>
            </div>
            <div className="content-right">
              <div className="glow-right" />
              <div className="music-wave-image parallax" data-speed='20' />
              <div className="d-flex flex-column h1-right align-items-center parallax" data-speed='40' />
            </div>
          </div>
        </div>
        <div className="h2 d-flex align-items-center  flex-column" id='display-song-card' ref={section}>
          <div className="h2-content d-flex align-items-center">
            <div className="h2-img" style={{ backgroundImage: `url(${cardDisplaySongs[currentDisplaySongNumber].songArt})` }}></div>
            <div className="h2-content-text d-flex ">
              <div className="h2-content-line d-flex align-items-center">
                <div></div>
              </div>
              <div>
                <h1 className='song-name-card'>{cardDisplaySongs[currentDisplaySongNumber].songName}</h1>
                <p>{cardDisplaySongs[currentDisplaySongNumber].songDesc}</p>
                <div className="h2-btn">Stream now</div>
              </div>
            </div>
          </div>
          <div className="h2-content-btm d-flex align-items-center">
            <div className="h2-dot h2-dot-checked" onClick={() => setCurrentDisplaySongNumber(0)}></div>
            <div className="h2-dot" onClick={() => setCurrentDisplaySongNumber(1)}></div>
            <div className="h2-dot" onClick={() => setCurrentDisplaySongNumber(2)}></div>
          </div>
        </div>
        <div className="feature-section ">
          <img src="./bottom-blur.png" alt="blur" className='bottom-blur' />
          <div className="carousel-section">
           { isCreator ? (<div className='carousel-item'>
              <h1 className='carousel-upper-heading'>Publish</h1>
              <h1 className='carousel-lower-heading'>your song hassle-free</h1>
              <p className="carousel-desc">Every artist deserves a stage. Melodicity is the place where you can share your song with people.</p>
            </div>) : (
              <div className='carousel-item'>
                <h1 className='carousel-upper-heading'>No limits</h1>
                <h1 className='carousel-lower-heading'>unlimited genres</h1>
                <p className="carousel-desc">Melodicity is the city of melodies. It lets Artists to publish any genre of music, thus giving listeners a vast collection of songs.</p>
              </div>
            )}
            {/* <Carousel /> */}
            <Link to={'/login'}><button className="login-last-btn">Log in</button></Link>
          </div>
          <div className="right-section">
            <img className="bottom-illustration" src="bottom-illus.svg" alt="illustration" />
          </div>
        </div>
      </div>
      <footer>
        <h1>Melodicity &copy;</h1>
        <p>IIITM Gwalior</p>
      </footer>
    </div>
  )
}

export default Home