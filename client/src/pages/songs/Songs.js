import React from 'react';
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';
import './Songs.css'
import Logo from '../../components/logo/Logo'
import SongCard from '../../components/songList/SongCard'

function Songs() {
    return (
        <div className='profile-page'>
            <div className='top-background'>
                <img src="/back-icon.svg" alt='' className='back-icon' />
                <div className="logo-container">
                    <WaveAnimation
                        iterationCount={0}
                        color="#fff"
                        height="35px"
                    />
                    {/* <Logo /> */}
                    <input type="search" className="search-songs" placeholder="Search" />
                </div>
            </div>
            <div className="bottom-background">
                <div className="profile-card-glass songs-card-glass flex-column">
                    <div className="songs-heading d-flex justify-content-between">
                        <span>All Songs</span>
                        <button className='publish-btn'> {/*if user == artist*/}
                            <img src="/plus-icon.svg" alt="publish" className='plus-icon'/>
                            Publish
                        </button>
                    </div>
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                </div>
            </div>
        </div>
    )
}

export default Songs;
