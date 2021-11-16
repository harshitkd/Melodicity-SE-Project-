import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
    return (
      <>
        <Navbar />
        <div className="home d-flex flex-column">
          {/* <div className="home-bg-spot-1"></div>
          <div className="home-bg-spot-2"></div> */}
          <div className="h1 d-flex">
            <div className="h1-bg"></div>
            <div className="h1-content d-flex align-items-center">
              <div className="d-flex flex-column h1-header flex-column">
                <span>Music you need</span>
                <div className="h1-button">
                  Explore
                </div>
              </div>
              <div className="d-flex flex-column h1-right align-items-center">
              </div>
            </div>
          </div>
          <div className="h2 d-flex align-items-center  flex-column">
            <div className="h2-content d-flex align-items-center">
              <div className="h2-img"></div>
              <div className="h2-content-text d-flex ">
                <div className="h2-content-line d-flex align-items-center">
                  <div></div>
                </div>
                <div>
                  <span>Distance</span>
                  <p>Distance is the song interpreted by oneRepublic, released on the album human in 2021.</p>
                  <div className="h2-btn">Stream now</div>
                </div>
              </div>
            </div>
            <div className="h2-content-btm d-flex align-items-center">
              <div className="h2-dot h2-dot-checked"></div>
              <div className="h2-dot"></div>
              <div className="h2-dot"></div>
            </div>
          </div>
          <div className="h3 d-flex align-items-center">
            
          </div>
        </div>
      </>
    )
}

export default Home
