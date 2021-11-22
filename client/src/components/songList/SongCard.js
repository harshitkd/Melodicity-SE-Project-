import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { setSongPlaylist } from '../../redux/songs/songsActionCreators';
import { likeSong } from '../../redux/songs/songsActions';
import './SongCard.css'

const SongCard = ({song, setShow, setSongId}) => {
    const token = useSelector(state => state?.auth?.token)
    const songs = useSelector(state => state?.songs?.songs)
    const dispatch = useDispatch();
    const songCover = {
        backgroundImage : `url('${song?.cover}')`
    }
    const handlePlay = () => {
        let index = songs.length-1, i
        for(i = 0; i <= songs.length; i++){
            if(songs[i]._id === song._id)
                break
        }
        index = i;
         
        dispatch(setSongPlaylist([...songs.slice(index, songs.length),...songs.slice(0,index)]))
    }
    const handleLike = (e) => {
        e.stopPropagation();
        dispatch(likeSong({
            token,
            songInfo : {
                creationId : song._id
            }
        }))
    }
    const handleRating = (e) => {
        e.stopPropagation();
        setSongId(song._id)
        setShow(true)
    }
    return ( 
            <div className="songlist-card d-flex justify-content-between align-items-center" onClick={handlePlay}>
                <div className="songlist-card-1 d-flex align-items-center">
                    <div className="songlist-card-img" style={songCover}></div>
                    <div className="songlist-card-info d-flex flex-column">
                        <span className="songlist-name">{song?.name}</span>
                        <span className="songlist-artist">{song?.singer}</span>
                    </div>
                </div>
                <div className="songlist-card-2 d-flex justify-content-between align-items-center">
                    <i className="far fa-star" onClick={handleRating}></i>
                    <i className="far fa-heart" onClick={handleLike}></i>
                </div>
            </div>
     );
}
 
export default SongCard;