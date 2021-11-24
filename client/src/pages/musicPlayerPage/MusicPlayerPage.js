import React, {useEffect} from 'react';
import { useSelector} from 'react-redux'
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';
import {useHistory, useParams} from 'react-router-dom'
import './MusicPlayerPage.css'
import Melodicity from '../../components/logo/Melodicity';


function MusicPLayerPage() {
    const {id} = useParams()
    const currentSong = useSelector(state => state?.songs?.currentSong)
    const history = useHistory();

    useEffect(()=>{
        if(id !== currentSong?._id)
            history.push(`/songs/${currentSong._id}`)
    },[currentSong, history, currentSong?._id, id])
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
                        <Melodicity />
                    </div>
                </div>
                <div className="bottom-background" style={{height:"57vh"}}>
                    	<div className="music-player-page-parent d-flex">
                            <div className="music-player-page-image" style={{backgroundImage : `url('${currentSong.cover}')`}}>

                            </div>
                            {/* <div className="music-player-page-info capitalize">
                                {currentSong.creatorId.creatorName}
                            </div> */}
                        </div>
                </div>
            </div>
    )
}

export default MusicPLayerPage
