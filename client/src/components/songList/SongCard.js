import React from 'react'
import './SongCard.css'

const SongCard = () => {
    const songCover = {
        backgroundImage : `url('/artist-image.png')`
    }
    return ( 
        <div className="song-card d-flex justify-content-between align-items-center">
            <div className="song-card-1 d-flex align-items-center">
                <div className="song-card-img" style={songCover}></div>
                <div className="song-card-info d-flex flex-column">
                    <span className="song-name">Song Name</span>
                    <span className="song-artist">Artist Name</span>
                </div>
            </div>
            <div className="song-card-2 d-flex justify-content-between align-items-center">
                <i className="far fa-star"></i>
                <i className="far fa-heart"></i>
            </div>
        </div>
     );
}
 
export default SongCard;