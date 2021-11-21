import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';
import {useHistory} from 'react-router-dom'
import './Songs.css'
import Logo from '../../components/logo/Logo'
import SongCard from '../../components/songList/SongCard'
import { getAllSongs } from '../../redux/songs/songsActions';
import Loader from '../../components/loader/Loader';

function Songs() {
    const dispatch = useDispatch()
    const token = useSelector(state => state?.auth?.token)
    const isLoading = useSelector(state => state?.songs?.isLoading)
    const songs = useSelector(state => state?.songs?.songs)
    const history = useHistory();
    useEffect(()=>{
        dispatch(getAllSongs({token}))
    },[])
    return (
        <>
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
                        <input type="search" className="search-songs" placeholder="Search" />
                    </div>
                </div>
                <div className="bottom-background" style={{height:"57vh"}}>
                    <div className="profile-card-glass songs-card-glass flex-column">
                        <div className="songs-heading d-flex justify-content-between">
                            <span>All Songs</span>
                            <button className='publish-btn'> {/*if user == artist*/}
                                <img src="/plus-icon.svg" alt="publish" className='plus-icon'/>
                                Publish
                            </button>
                        </div>
                        <div className="songs-list d-flex flex-column align-items-center">
                            {
                                songs?.map(
                                    song => <SongCard song={song} />
                                )
                            }
                        </div>
                    </div>			
                </div>
            </div>
        </>
    )
}

export default Songs;
