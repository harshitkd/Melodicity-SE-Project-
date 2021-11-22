import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from '../modal/Modal'
import './RatingModal.css'
import {rateSong } from '../../../redux/songs/songsActions'

function RatingModal({show, setShow, songId}) {
    const [rating, setRating] = useState(1);
    const token = useSelector(state => state?.auth?.token)
    const isRatingLoading = useSelector(state => state?.songs?.isRatingLoading)
    const dispatch = useDispatch()
    const alert = useSelector(state => state?.alert?.message)

    useEffect(() => {
        if(alert)
            setShow(false)
    }, [alert])

    const handleSubmit = () => {
        dispatch(rateSong({
            token,
            songInfo : {
                creationId : songId,
                rating
            }
        }))
    }

    const submitBtn = isRatingLoading ? <button className="publish-submit-btn" disabled><i className="fas fa-spinner" ></i></button> 
                                    : <button className="publish-submit-btn" onClick={handleSubmit}>Rate</button>
    return (
        <Modal show={show} onClose={() => setShow(false)}>
            <div className="rating-modal publish-form d-flex flex-column">
            <div className="star-container d-flex">
            {[...Array(5)].map((x, i) =>{
                if(i< rating)
                    return <i className="fas fa-star" onClick={() => setRating(i+1)}></i>
                
                    return <i className="far fa-star" onClick={() => setRating(i+1)}></i>
            })}
            </div>
                <div className="submit-rating-btn d-flex">
                    {submitBtn}
                    <button type="reset" className="publish-cancel-btn" onClick={()=>setShow(false)}>Cancel</button>
                </div>
            </div>
        </Modal>
    )
}

export default RatingModal
