import React from 'react';
import './SongCard.css';

function SongCard({songCover, songTitle,rating}) {
    return (
        <div className='song-card'>
            <img src={ songCover || "/song-cover.svg"} alt="song-cover" className='song-cover' /> {/*Dynamically fetch from database*/}
            <div className="card-info">
                <h1 className='song-name'>{ songTitle || "Song title"}</h1>  {/*Dynamically fetch from database*/}
                <img src="/option-btn.svg" alt="options" className='option-btn' />
            </div>
            {rating || <div className="rating">{rating}</div>}
        </div>
    )
}

export default SongCard;
