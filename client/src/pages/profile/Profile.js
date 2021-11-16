import React,{ useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './Profile.css';
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';
import Loader from '../../components/loader/Loader'
import { getUserDetails } from '../../redux/user/userActions';

function Profile() {
    const history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector(state => state?.auth?.token)
    const isLoading = useSelector(state => state?.user?.isLoading)
    const userInfo = useSelector(state => state?.user?.userInfo)
    const { id } = useParams();
    useEffect(()=>{
        dispatch(getUserDetails({token, id}))
    },[])
    return (
        <>
            {isLoading && <Loader />}
            {   userInfo &&
                <div className='profile-page'>
                    <div className='top-background'>
                        <img src="/back-icon.svg" alt='' className='back-icon' onClick={() => history.goBack()} />
                        <div className="logo-container">
                            <WaveAnimation
                                iterationCount={5}
                                color="#fff"
                                height="35px"
                            />
                            <h1 className='profile-heading'>Your Profile</h1>
                        </div>
                    </div>
                    <div className="bottom-background">
                        <div className="profile-card-glass">
                            <div className="left-photo-section">
                                <img src="/user-photo.svg" alt="userImage" className='user-photo' />
                            </div>
                            <div className="right-info-section">
                                <h1 className='user-name'>{userInfo.name}</h1>
                                {userInfo.isCreator && <div className="artist-tag">Artist</div> }
                                <div className="bottom-right-section">
                                    <div className="stats">100 Followers <div className='dot' /> 100 Listeners</div>
                                    {   userInfo.isCreator &&
                                        <button className='publish-btn'> {/*if user == artist*/}
                                            <img src="/plus-icon.svg" alt="publish" className='plus-icon'/>
                                            Publish
                                        </button>
                                    }
                                </div>
                            </div>
                            <img src="/pencil.svg" alt="edit" className='edit-icon' />
                        </div>
                        <div className="song-section">

                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Profile;
