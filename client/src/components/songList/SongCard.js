import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {useParams, useHistory} from 'react-router-dom'
import { setCurrentSong, setSongPlaylist } from '../../redux/songs/songsActionCreators';
import { likeSong } from '../../redux/songs/songsActions';
import './SongCard.css'

const SongCard = ({song, setShow, setSongId, setAdd}) => {
    const history = useHistory()
    const {playlistId} = useParams();
    const token = useSelector(state => state?.auth?.token)
    const songs = useSelector(state => state?.songs?.songs)
    const likedSongs = useSelector(state => state?.user?.userInfo?.likedSongs?.map(song => song._id))
    const isLikeLoading = useSelector(state => state?.songs?.isLikeLoading)
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
        dispatch(setCurrentSong(song));
        history.push(`/songs/${song._id}`)
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
    const handleAddInPlaylist = (e) => {
        e.stopPropagation();
        setSongId(song._id)
        setAdd(true)
    }
    const like = isLikeLoading ? <i className="fas fa-spinner" ></i> : (likedSongs && likedSongs.includes(song._id) ? 
        <i className="fas fa-heart" onClick={handleLike}></i>:
        <i className="far fa-heart" onClick={handleLike}></i>)
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
                    {like}
                    {!playlistId && <i className="fas fa-plus" onClick={handleAddInPlaylist}></i>}
                </div>
            </div>
     );
}
 
export default SongCard;