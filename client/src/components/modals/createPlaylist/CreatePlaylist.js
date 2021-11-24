import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { createPlaylist } from '../../../redux/songs/songsActions'
import Modal from '../modal/Modal'
import './CreatePlaylist.css'

function CreatePlaylist({show, setShow}) {
    const dispatch = useDispatch()
    const isRatingLoading = useSelector(state => state?.songs?.isRatingLoading)
    const token = useSelector(state => state?.auth?.token)
    const [playlistName,setPlaylistName] = useState(null)
    const alert = useSelector(state => state?.alert?.message)

    useEffect(() => {
        if(alert && !isRatingLoading)
            setShow(false)
    }, [alert, isRatingLoading, setShow])
    const handleSubmit = () => {
        dispatch(createPlaylist({
            token,
            playlistInfo : {
                name : playlistName
            }
        }))
    }
    const submitBtn = isRatingLoading ? <button className="publish-submit-btn" disabled><i className="fas fa-spinner" ></i></button> 
                                    : <button className="publish-submit-btn" onClick={handleSubmit}>Create</button>
    return (
        <Modal 
            show={show}
            setShow={setShow}
        >
            <div className="create-playlist publish-form d-flex flex-column">
                <div className="input-div">
                    <input 
                        type="text" 
                        name="name" 
                        className="form-input" 
                        placeholder="  " 
                        required 
                        onChange={(e)=>{
                            setPlaylistName(e.target.value);
                        }}
                        />
                    <label htmlFor="name" className="form-label">Name</label>
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

export default CreatePlaylist
