import React from 'react';
import {useHistory} from 'react-router-dom'

function UserCard({user}) {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/profile/${user._id}`)
    }
    return (
        <div className='song-card' onClick={handleClick}>
            <img src={user.cover ? user.cover : "/user-photo.svg"} alt="song-cover" className='song-cover' style={{minHeight : "140px", minWidth:"140px"}}/>
            <div className="card-info">
                <h1 className='song-name'>{ user.name}</h1> 
            </div>
        </div>
    )
}

export default UserCard;
