import React from 'react'
import Modal from './modal/Modal'

const CreatorInfoModal = ({show, setShow}) => {
    return (
        <Modal show={show} onClose={() => setShow(false)}>
            <div className="login-form">
            <form className="form">
                <div className="input-div">
                    <input 
                        type="text" 
                        name="name" 
                        className="form-input" 
                        placeholder="  " 
                        required 
                        // onChange={(e)=>{
                        //     setUsername(e.target.value);
                        // }}
                        />
                    <label htmlFor="email" className="form-label">Creator Name</label>
                    <div className="input-icon"><i className="far fa-user"></i></div>
                </div>
                <div className="input-div" style={{marginBottom : "0.5rem"}}>
                    <input 
                    type="text" 
                    name="genre" 
                    // ref={passwordRef} 
                    className="form-input" 
                    placeholder="  " 
                    required 
                    // onChange={(e)=>{
                    //         setPassword(e.target.value);
                    //     }}
                    />
                    <label htmlFor="password" className="form-label">Genres</label>
                    <div className="input-icon"><i className="fas fa-music"></i></div>
                </div>          
                </form>
                <div className="login-submit-btn d-flex align-items-center submit">Submit</div>
                <div className="login-submit-btn d-flex align-items-center opt" onClick={() => setShow(false)}>Cancel</div>
            </div>
        </Modal>
    )
}

export default CreatorInfoModal
