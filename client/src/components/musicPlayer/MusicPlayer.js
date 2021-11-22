import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import "./MusicPlayer.css"

function MusicPlayer() {
  const songPlaylist = useSelector(state => state?.songs?.songPlaylist)
    return (
        <div>
            {
              songPlaylist && 
              <ReactJkMusicPlayer
                audioLists={songPlaylist}        
                defaultPosition={{top:"50%", left:"0px"}}
                // remember={true}
                showThemeSwitch={false}
              />
            }
        </div>
    )
}

export default MusicPlayer
