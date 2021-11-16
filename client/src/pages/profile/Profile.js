import React from 'react';
import './Profile.css';
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';
import SongCard from '../../components/songCard/SongCard';


function Profile() {
    const songList = [...Array(8).keys()];
    const playlistCollection = [...Array(3).keys()];
    return (
        <div className='profile-page'>
            <div className='top-background'>
                <img src="back-icon.svg" alt='' className='back-icon' />
                <div className="logo-container">
                    <WaveAnimation
                        iterationCount={0}
                        color="#fff"
                        height="22px"
                    />
                    <h1 className='profile-heading'>Your Profile</h1>
                </div>
            </div>
            <div className="bottom-background">
                <div className="profile-card-glass">
                    <div className="left-photo-section">
                        <div className="user-photo-container">
                            <img src="./user-photo.svg" alt="userImage" className='user-photo' /> {/* fetch from user database */}
                            <div className="edit-overlay">
                                <img src="pencil-dark.svg" alt="edit" />
                            </div>
                        </div>
                    </div>
                    <div className="right-info-section">
                        <h1 className='user-name'>Name</h1> {/* fetch from user database */}
                        <div className="artist-tag">Artist</div> {/*if user == artist*/}
                        <div className="bottom-right-section">
                            <div className="stats">100 Followers <div className='dot' /> 100 Listeners</div> {/* fetch from user database */}
                            <button className='publish-btn'> {/*if user == artist*/}
                                <img src="./plus-icon.svg" alt="publish" className='plus-icon' />
                                Publish
                            </button>
                        </div>
                    </div>
                    <img src="./pencil.svg" alt="edit" className='edit-icon' />
                </div>
                <div className="song-section">
                    <div className="category">
                        <h1 className="category-name">Your Songs</h1> {/*if user == artist*/}
                        <div className="song-list">
                            {songList.slice(0, 7).map((songInfo, id) => {
                                return <SongCard songTitle={""} songCover={""} key={id} />
                            })}
                        </div>
                        {(songList.length > 7) && <button className='show-more-btn'>Show more</button>}
                    </div>
                    <div className="category">
                        <h1 className="category-name">Your Favorites</h1>
                        <div className="song-list">
                            {songList.slice(0, 7).map((songInfo, id) => {
                                return <SongCard songTitle={""} songCover={""} key={id} />
                            })}
                        </div>
                        {(songList.length > 7) && <button className='show-more-btn'>Show more</button>}
                    </div>
                    <div className="category">
                        <h1 className="category-name">Songs you rated</h1>
                        <div className="song-list">
                            {songList.slice(0, 7).map((songInfo, id) => {
                                return <SongCard songTitle={""} songCover={""} rating={1} key={id} />
                            })}
                        </div>
                        {(songList.length > 7) && <button className='show-more-btn'>Show more</button>}
                    </div>
                    <div className="category">
                        <h1 className="category-name">Your Playlists</h1>
                        <div className="song-list">
                            {playlistCollection.slice(0, 7).map((songInfo, id) => {
                                return (
                                    <div className="playlist">Playlist Title</div> // if user == artist
                                )
                            })}
                        </div>
                        {(playlistCollection.length > 7) && <button className='show-more-btn'>Show more</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
