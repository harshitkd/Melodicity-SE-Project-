import React,{ useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './Profile.css';
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';
import SongCard from '../../components/songCard/SongCard';
import Loader from '../../components/loader/Loader'
import { getUserDetails } from '../../redux/user/userActions';
import PublishModal from '../../components/modals/pubishModal/PublishModal';
import { userLogout } from '../../redux/auth/authActions';



function Profile() {
    const creations = useSelector(state => state?.user?.userInfo?.creations)
    const likedSongs = useSelector(state => state?.user?.userInfo?.likedSongs)
    const ratedSongs = useSelector(state => state?.user?.userInfo?.rated)
    const [show, setShow] = useState(false)
    const playlistCollection = [...Array(3).keys()];
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
                    <PublishModal 
                        show={show}
                        setShow={setShow}
                    />
					<div className='top-background'>
						<img src="/back-icon.svg" alt='' className='back-icon' onClick={()=> history.goBack()} />
						<div className="logo-container">
							<WaveAnimation
								iterationCount={0}
								color="#fff"
								height="22px"
							/>
							<h1 className='profile-heading'>Your Profile</h1>
						</div>
					</div>
					<div className="bottom-background">
						<div className="profile-card-glass">
							<div className="left-photo-section">
								<div className="user-photo-container">
									<img src="/user-photo.svg" alt="userImage" className='user-photo' /> {/* fetch from user database */}
									<div className="edit-overlay">
										<img src="/pencil-dark.svg" alt="edit" />
									</div>
								</div>
							</div>
							<div className="right-info-section">
								<h1 className='user-name'>{userInfo.name}</h1> {/* fetch from user database */}
								{userInfo.isCreator && <div className="artist-tag">Artist</div>} 
								<div className="bottom-right-section">
									<div className="stats">100 Followers <div className='dot' /> 100 Listeners</div> {/* fetch from user database */}
									{   userInfo.isCreator && 
                                        <button className='publish-btn' onClick={()=>setShow(true)}> {/*if user == artist*/}
                                            <img src="/plus-icon.svg" alt="publish" className='plus-icon' />
                                            Publish
                                        </button>
                                    }
								</div>
							</div>
							<img src="/pencil.svg" alt="edit" className='edit-icon' onClick={() => dispatch(userLogout())}/>
						</div>
						<div className="song-section">
                        {   userInfo.isCreator && creations && 
							<div className="category">
								<h1 className="category-name">Your Songs</h1> {/*if user == artist*/}
								<div className="song-list">
									{ creations.slice(0, 7).map((songInfo, id) => {
										return <SongCard songTitle={songInfo.name} songCover={songInfo.cover} key={songInfo._id} />
									})}
								</div>
								{(creations.length > 7) && <button className='show-more-btn'>Show more</button>}
							</div>
                        }
							{   !!likedSongs.length  &&
                                <div className="category">
								<h1 className="category-name">Your Favorites</h1>
								<div className="song-list">
									{likedSongs.slice(0, 7).map((songInfo, id) => {
										return <SongCard songTitle={songInfo.name} songCover={songInfo.cover} key={id} />
									})}
								</div>
								{(likedSongs.length > 7) && <button className='show-more-btn'>Show more</button>}
							</div>}
							{   (ratedSongs && !!ratedSongs.length) &&
                                <div className="category">
								<h1 className="category-name">Songs you rated</h1>
								<div className="song-list">
									{ratedSongs.slice(0, 7).map((songInfo, id) => {
										return <SongCard songTitle={songInfo.creationId.name} songCover={songInfo.creationId.cover} rating={1} key={id} />
									})}
								</div>
								{(ratedSongs.length > 7) && <button className='show-more-btn'>Show more</button>}
							</div>}
							<div className="category">
								<h1 className="category-name">Your Playlists</h1>
								<div className="song-list">
									{playlistCollection.slice(0, 7).map((songInfo, id) => {
										return (
											<div className="playlist">Playlist Title</div> // if user == artist
										)
									})}
									<div className="playlist"> <i className="fas fa-plus"></i> Create Playlist</div>
								</div>
								{(playlistCollection.length > 7) && <button className='show-more-btn'>Show more</button>}
							</div>
						</div>
					</div>
				</div>
            }
        </>
    )
}

export default Profile;
