import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import "./MusicPlayer.css"
import { setCurrentSong } from '../../redux/songs/songsActionCreators'

function MusicPlayer() {
  const songPlaylist = useSelector(state => state?.songs?.songPlaylist)
  const dispatch = useDispatch()
    return (
        <div>
            {
              songPlaylist && 
              <ReactJkMusicPlayer
                audioLists={songPlaylist}        
                defaultPosition={{top:"50%", left:"0px"}}
                onAudioPlay={(song) => dispatch(setCurrentSong(song))}
                showThemeSwitch={false}
                clearPriorAudioLists ={true}
                spaceBar={true}
              />
            }
        </div>
    )
}

export default MusicPlayer
