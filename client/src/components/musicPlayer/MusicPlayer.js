import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { getAllSongs } from '../../redux/songs/songsActions'
import "./MusicPlayer.css"

function MusicPlayer() {
    
  const token = useSelector(state => state?.auth?.token)
  const songs = useSelector(state => state?.songs?.songs)
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getAllSongs({token}))
  },[])
    return (
        <div>
            {
              songs && 
              <ReactJkMusicPlayer
                audioLists={songs}        
                defaultPosition={{top:"50%", left:"0px"}}
                remember={true}
                showThemeSwitch={false}
              />
            }
        </div>
    )
}

export default MusicPlayer
