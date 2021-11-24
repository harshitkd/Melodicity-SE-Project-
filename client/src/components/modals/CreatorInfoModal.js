import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { userRegister } from '../../redux/auth/authActions'
import Modal from './modal/Modal'

const CreatorInfoModal = ({show, setShow}) => {
    const dispatch = useDispatch()
    const [creatorName, setCreatorName] = useState()
    const [genre, setGenre] = useState([])
    const isLoading = useSelector(state => state?.auth?.isLoading)
    const userInfo = useSelector(state => state?.auth?.preUserInfo)
    const alert = useSelector(state => state?.alert?.message)

    useEffect(() => {
        if(alert && !isLoading)
            setShow(false)
    }, [alert, setShow, isLoading])
    const submitButton = isLoading ? (
        <button className="login-submit-btn d-flex align-items-center submit" disabled><i className="fas fa-spinner" ></i></button>
    ) : (
      <button className="login-submit-btn d-flex align-items-center submit">Register</button>
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        const m = {
            ...userInfo,
            creatorName,
            genre
        }
        dispatch(userRegister(m))
    }
    return (
        <Modal show={show} onClose={() => setShow(false)}>
            <div className="login-form"> 
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-div">
                    <input 
                        type="text" 
                        name="name" 
                        className="form-input" 
                        placeholder="  " 
                        required 
                        onChange={(e)=>{
                            setCreatorName(e.target.value);
                        }}
                        />
                    <label htmlFor="email" className="form-label">Creator Name</label>
                    <div className="input-icon"><i className="far fa-user"></i></div>
                </div>
                <div className="input-div" style={{marginBottom : "0.5rem"}}>
                    <input 
                    type="text" 
                    name="genre" 
                    className="form-input" 
                    placeholder="  " 
                    onChange={(e)=>{
                            setGenre(e.target.value);
                        }}
                    />
                    <label htmlFor="genre" className="form-label">Genres</label>
                    <div className="input-icon"><i className="fas fa-music"></i></div>
                </div> 
                {submitButton}         
                </form>
                <div className="login-submit-btn d-flex align-items-center opt" onClick={() => setShow(false)}>Cancel</div>
            </div>
        </Modal>
    )
}

export default CreatorInfoModal
