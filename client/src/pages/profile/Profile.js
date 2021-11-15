import React from 'react';
import './Profile.css';
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';

function Profile() {
    return (
        <div className='profile-page'>
            <div className='top-background'>
                <img src="back-icon.svg" alt='' className='back-icon' />
                <div className="logo-container">
                    <WaveAnimation
                        iterationCount={0}
                        color="#fff"
                        height="35px"
                    />
                    <h1 className='profile-heading'>Your Profile</h1>
                </div>
            </div>
            <div className="bottom-background">
                <div className="profile-card-glass">
                    <div className="left-photo-section">
                        <img src="./user-photo.svg" alt="userImage" className='user-photo' />
                    </div>
                    <div className="right-info-section">
                        <h1 className='user-name'>Name</h1>
                        <div className="artist-tag">Artist</div> {/*if user == artist*/}
                        <div className="bottom-right-section">
                            <div className="stats">100 Followers <div className='dot' /> 100 Listeners</div>
                            <button className='publish-btn'> {/*if user == artist*/}
                                <img src="./plus-icon.svg" alt="publish" className='plus-icon'/>
                                Publish
                            </button>
                        </div>
                    </div>
                    <img src="./pencil.svg" alt="edit" className='edit-icon' />
                </div>
                <div className="song-section">

                </div>
            </div>
        </div>
    )
}

export default Profile;
