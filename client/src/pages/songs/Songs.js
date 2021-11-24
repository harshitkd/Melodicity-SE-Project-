import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';
import {useHistory, useParams} from 'react-router-dom'
import './Songs.css'
import SongCard from '../../components/songList/SongCard'
import { getAllSongs, getPlaylistSongs } from '../../redux/songs/songsActions';
import Loader from '../../components/loader/Loader';
import { getAllUsers, getUserDetails } from '../../redux/user/userActions';
import RatingModal from '../../components/modals/ratingModal/RatingModal'
import AddToPlaylist from '../../components/modals/addToPlaylist/AddToPlaylist'
import Melodicity from '../../components/logo/Melodicity';
import UserCard from '../../components/userCard/UserCard';

function Songs() {
    const {playlistId} = useParams()
    const dispatch = useDispatch()
    const token = useSelector(state => state?.auth?.token)
    const isLoading = useSelector(state => state?.songs?.isLoading)
    const [songs, setSongs] = useState(useSelector(state => state?.songs?.songs))
    const [users, setUsers] = useState(null)
    const allSongs = useSelector(state => state?.songs?.songs);
    const allUsers = useSelector(state => state?.user?.userList);
    const id = useSelector(state => state?.auth?.userId)
    const userInfo = useSelector(state => state?.user?.userInfo)
    const history = useHistory();
    const [showRatingModal, setShowRatingModal] = useState(false)
    const [addToPlaylistShow, setAddToPlaylistShow] = useState(false)
    const [songId, setSongId] = useState(null)
    const [search, setSearch] = useState("")
    useEffect(()=>{
        if(!playlistId){
            dispatch(getAllSongs({token}))
        }
        else{
            dispatch(getPlaylistSongs({
                token,
                playlistId
            }))
        }
        dispatch(getUserDetails({token, id}))
        dispatch(getAllUsers({token}));
    },[dispatch, id, playlistId, token])

    useEffect(()=>{
        if(songs && search !== ""){
            setSongs(allSongs.filter(song => song.name.toLowerCase().includes(search.toLowerCase())  || song.name.split(" ").join("").toLowerCase().includes(search.toLowerCase()))) 
            if(allUsers && allUsers.length)
                setUsers(allUsers.filter(user => user.name.toLowerCase().includes(search.toLowerCase())  || user.name.split(" ").join("").toLowerCase().includes(search.toLowerCase())))
        }
        else{
            setSongs(allSongs)
            setUsers(null)
        }
    },[search, allSongs])
    return (
        <>
            <RatingModal 
                show={showRatingModal}
                setShow = {setShowRatingModal}
                songId = {songId}
            />
            
			<AddToPlaylist 
				show={addToPlaylistShow}
				setShow={setAddToPlaylistShow}
                creationId = {songId}
			/>
            {isLoading && <Loader />}
            <div className='profile-page'>
                <div className='top-background'>
                    <img src="/back-icon.svg" alt='' className='back-icon' onClick={()=> history.goBack()} />
                    <div className="logo-container">
                        <WaveAnimation
                            iterationCount={0}
                            color="#fff"
                            height="22px"
                        />
                        <Melodicity />
                        <input type="search" className="search-songs" placeholder="Search" onChange={(e)=> setSearch(e.target.value)}/>
                    </div>
                </div>
                <div className="bottom-background" style={{height:"57vh"}}>
                    <div className="profile-card-glass songs-card-glass flex-column">
                        <div className="songs-heading d-flex justify-content-between">
                            {userInfo && playlistId ? 
                            <span classname="capitalize">
                                {userInfo.playlists.filter(playlist => playlist._id === playlistId)[0].playlistName}
                            </span> 
                            : <span>All Songs</span>}
                        </div>
                        <div className="songs-list d-flex flex-column align-items-center">
                            {
                                songs?.map(song => 
                                    <SongCard 
                                        song={song} 
                                        setShow={setShowRatingModal} 
                                        setSongId={setSongId}
                                        setAdd={setAddToPlaylistShow}
                                    />
                                )
                            }
                        </div>
                        {   users && 
                            <div className="category" style={{alignSelf:"flex-start", width:"100%"}}>
                                <div className="songs-heading d-flex justify-content-between" style={{marginBottom : "0"}}>
                                    <span>Artists</span>
                                </div>
                                <div className="song-list">
                                    {users.map((user, id) => {
                                        return <UserCard user={user} key={id} />
                                    })}
                                </div>
                                {(users.length > 7) && <button className='show-more-btn'>Show more</button>}
                            </div>
                        }
                    </div>	
                </div>
            </div>
        </>
    )
}

export default Songs;
