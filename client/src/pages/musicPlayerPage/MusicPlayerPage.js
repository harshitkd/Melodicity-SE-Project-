import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';
import {useHistory} from 'react-router-dom'
import Logo from '../../components/logo/Logo'
import SongCard from '../../components/songList/SongCard'
import { getAllSongs } from '../../redux/songs/songsActions';
import Loader from '../../components/loader/Loader';
import './MusicPlayerPage.css'


function MusicPLayerPage() {
    const dispatch = useDispatch()
    const token = useSelector(state => state?.auth?.token)
    const isLoading = useSelector(state => state?.songs?.isLoading)
    const songs = useSelector(state => state?.songs?.songs)
    console.log(songs)
    const history = useHistory();
    return (
        <div className='profile-page'>
                <div className='top-background'>
                    <img src="/back-icon.svg" alt='' className='back-icon' onClick={()=> history.goBack()} />
                    <div className="logo-container">
                        <WaveAnimation
                            iterationCount={0}
                            color="#fff"
                            height="22px"
                        />
                    </div>
                </div>
                <div className="bottom-background" style={{height:"57vh"}}>
                    	<div className="music-player-page-parent d-flex">
                            <div className="music-player-page-image">

                            </div>
                            <div className="music-player-page-info">

                            </div>
                        </div>
                </div>
            </div>
    )
}

export default MusicPLayerPage
