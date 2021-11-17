import React from 'react';
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';
import {useHistory} from 'react-router-dom'
import './Songs.css'
import Logo from '../../components/logo/Logo'
import SongCard from '../../components/songList/SongCard'

function Songs() {
    const history = useHistory();
    return (
        <div className='profile-page'>
			<div className='top-background'>
				<img src="/back-icon.svg" alt='' className='back-icon' onClick={()=> history.goBack()} />
				<div className="logo-container">
					<WaveAnimation
						iterationCount={0}
						color="#fff"
						height="22px"
					/>
					<input type="search" className="search-songs" placeholder="Search" />
				</div>
			</div>
			<div className="bottom-background" style={{height:"57vh"}}>
                <div className="profile-card-glass songs-card-glass flex-column">
                    <div className="songs-heading d-flex justify-content-between">
                        <span>All Songs</span>
                        <button className='publish-btn'> {/*if user == artist*/}
                            <img src="/plus-icon.svg" alt="publish" className='plus-icon'/>
                            Publish
                        </button>
                    </div>
                    <div className="songs-list d-flex flex-column align-items-center">
                        <SongCard />
                        <SongCard />
                        <SongCard />
                        <SongCard />
                        <SongCard />
                    </div>
                </div>			
			</div>
		</div>
    )
}

export default Songs;
