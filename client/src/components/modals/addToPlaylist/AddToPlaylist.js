import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addToPlaylist, createPlaylist } from '../../../redux/songs/songsActions'
import Modal from '../modal/Modal'
import './AddToPlaylist.css'

function AddToPlaylist({show, setShow, creationId}) {
    const dispatch = useDispatch()
    const isRatingLoading = useSelector(state => state?.songs?.isRatingLoading)
    const token = useSelector(state => state?.auth?.token)
    const [playlistName,setPlaylistName] = useState(null)
    const playlists = useSelector(state => state?.user?.userInfo?.playlists)
    const alert = useSelector(state => state?.alert?.message)

    useEffect(() => {
        if(alert && !isRatingLoading)
            setShow(false)
    }, [alert, setShow, isRatingLoading])
    const handleSubmit = () => {
        dispatch(createPlaylist({
            token,
            playlistInfo : {
                name : playlistName,
                creationId
            }
        }))
    }
    const handleClick = (id) => {
        dispatch(addToPlaylist({
            token,
            playlistInfo : {
                playlistId : id,
                creationId
            }
        }))
    }
    const submitBtn = isRatingLoading ? <button className="publish-submit-btn" disabled><i className="fas fa-spinner" ></i></button> 
                                    : <button className="publish-submit-btn" onClick={handleSubmit}>Add</button>
    return (
        <Modal 
            show={show}
            setShow={setShow}
        >
            <div className="publish-form d-flex flex-column">
                <div className="add-head">
                    Choose a playlist or create a new one.
                </div>
                {
                    playlists && !!playlists.length && playlists.map(playlist => 
                        <div className="capitalize add-playlist-card" onClick={() => handleClick(playlist._id)}>
                            <i className="far fa-play-circle"></i>  {playlist.playlistName}
                        </div>
                    )
                }
                <div className="input-div">
                    <input 
                        type="text" 
                        name="name" 
                        className="form-input" 
                        placeholder="  " 
                        onChange={(e)=>{
                            setPlaylistName(e.target.value);
                        }}
                        />
                    <label htmlFor="name" className="form-label">New Playlist</label>
                    <div className="input-icon"><i className="far fa-play-circle"></i></div>
                </div>
                <div className="submit-rating-btn d-flex">
                    {submitBtn}
                    <button type="reset" className="publish-cancel-btn" onClick={()=>setShow(false)}>Cancel</button>
                </div>
            </div>
        </Modal>
    )
}

export default AddToPlaylist
