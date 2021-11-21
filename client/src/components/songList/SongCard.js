import React from 'react'
import './SongCard.css'

const SongCard = ({song}) => {
    const songCover = {
        backgroundImage : `url('${song?.cover}')`
    }
    return ( 
        <div className="songlist-card d-flex justify-content-between align-items-center">
            <div className="songlist-card-1 d-flex align-items-center">
                <div className="songlist-card-img" style={songCover}></div>
                <div className="songlist-card-info d-flex flex-column">
                    <span className="songlist-name">{song?.name}</span>
                    <span className="songlist-artist">{song?.singer}</span>
                </div>
            </div>
            <div className="songlist-card-2 d-flex justify-content-between align-items-center">
                <i className="far fa-star"></i>
                <i className="far fa-heart"></i>
            </div>
        </div>
     );
}
 
export default SongCard;