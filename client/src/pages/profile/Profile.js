import React from 'react';
import './Profile.css';
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';

function Profile() {
    return (
        <div className='profile-page'>
            <div className='top-background'>
                <img src="back-icon.svg" alt='' className='back-icon' />
                {/* <WaveAnimation
                    iterationCount={0}
                    color="#fff"
                    height="35px"
                />
                <h1 className='profile-heading'>Your Profile</h1> */}
            </div>
            <div className="bottom-background"></div>
        </div>
    )
}

export default Profile;
