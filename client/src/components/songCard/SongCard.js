import React from 'react';
import './SongCard.css';
import { useDispatch} from 'react-redux'
import { setCurrentSong, setSongPlaylist } from '../../redux/songs/songsActionCreators';
import './SongCard.css'

function SongCard({song, songs}) {
    const dispatch = useDispatch();
    const handlePlay = () => {
        let index = songs.length-1, i
        for(i = 0; i <= songs.length; i++){
            if(songs[i]._id === song._id)
                break
        }
        index = i;
         
        dispatch(setSongPlaylist([...songs.slice(index, songs.length),...songs.slice(0,index)]))
        dispatch(setCurrentSong(song));
    }
    return (
        <div className='song-card' onClick={handlePlay}>
            <img src={ song.cover} alt="song-cover" className='song-cover' /> {/*Dynamically fetch from database*/}
            <div className="card-info">
                <h1 className='song-name'>{ song.name}</h1>  {/*Dynamically fetch from database*/}
                <img src="/option-btn.svg" alt="options" className='option-btn' />
            </div>
            {/* {rating || <div className="rating">{rating}</div>} */}
        </div>
    )
}

export default SongCard;
