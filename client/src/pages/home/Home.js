import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'

const Home = () => {
  const [currentDisplaySongNumber, setCurrentDisplaySongNumber] = useState(0);
  const songCover = "../../assets/album-art.jpg";
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

  function onDotClick(e) {
    console.log('clicked');

  }

  useEffect(() => {
    
  }, [])

  return (
    <>
      <Navbar />
      <div className="songcover-bg" style={{backgroundImage: `url(${cardDisplaySongs[currentDisplaySongNumber].songArt})`  }} /> 
       {/*dynamically change the background */}
      <div className="bg-blur" />
      <div className="home d-flex flex-column">
        {/* <div className="home-bg-spot-1"></div>
          <div className="home-bg-spot-2"></div> */}
        <div className="h1 d-flex">
          <div className="h1-bg"></div>
          <div className="h1-content d-flex align-items-center">
            <div className="d-flex flex-column h1-header flex-column">
              <span>Music you need</span>
              <a href="#display-song-card">
                <div className="h1-button">
                  Explore
                </div>
              </a>
            </div>
            <div className="content-right">
              <div className="glow-right" />
              <div className="music-wave-image" />
              <div className="d-flex flex-column h1-right align-items-center" />
            </div>
          </div>
        </div>
        <div className="h2 d-flex align-items-center  flex-column" id='display-song-card'>
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
            <Carousel />
            {/* <Link to={'/login'}>Log in</Link> */}
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
    </>
  )
}

export default Home
