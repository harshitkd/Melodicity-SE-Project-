import React from 'react';
import {useHistory} from 'react-router-dom'

function UserCard({user}) {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/profile/${user._id}`)
    }
    return (
        <div className='song-card' onClick={handleClick}>
            <img src='/user-photo.svg' alt="song-cover" className='song-cover' />
            <div className="card-info">
                <h1 className='song-name'>{ user.name}</h1> 
            </div>
        </div>
    )
}

export default UserCard;
