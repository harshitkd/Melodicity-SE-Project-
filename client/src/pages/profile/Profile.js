import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css';
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation';
import SongCard from '../../components/songCard/SongCard';
import Loader from '../../components/loader/Loader'
import { getUserDetails, updateUserCover } from '../../redux/user/userActions';
import PublishModal from '../../components/modals/pubishModal/PublishModal';
import { userLogout } from '../../redux/auth/authActions';
import CreatePlaylist from '../../components/modals/createPlaylist/CreatePlaylist'



function Profile() {
	const creations = useSelector(state => state?.user?.userInfo?.creations)
	const likedSongs = useSelector(state => state?.user?.userInfo?.likedSongs)
	const ratedSongs = useSelector(state => state?.user?.userInfo?.rated)
	const playlists = useSelector(state => state?.user?.userInfo?.playlists)
	const [show, setShow] = useState(false)
	const [createPlaylistShow, setCreatePlaylistShow] = useState(false)
	const history = useHistory();
	const dispatch = useDispatch();
	const token = useSelector(state => state?.auth?.token)
	const isLoading = useSelector(state => state?.user?.isLoading)
	const isUpdateLoading = useSelector(state => state?.user?.isUpdateLoading)
	const userInfo = useSelector(state => state?.user?.userInfo)
	const userId = useSelector(state => state?.auth?.userId)
	const { id } = useParams();
	const userCheck = id === userId;
	const handleLogout = () => {
		dispatch(userLogout())
		history.push(`/login`)
	}
	useEffect(() => {
		if (id !== userInfo?._id)
			dispatch(getUserDetails({ token, id }))
	}, [dispatch, id, token, userInfo?._id])
	return (

		<>
			{isLoading && <Loader />}
			{userInfo &&
				<div className='profile-page'>
					<PublishModal
						show={show}
						setShow={setShow}
					/>
					<CreatePlaylist
						show={createPlaylistShow}
						setShow={setCreatePlaylistShow}
					/>
					<div className='top-background'>
						<img src="/back-icon.svg" alt='' className='back-icon' onClick={() => history.goBack()} />
						<div className="logo-container">
							<WaveAnimation
								iterationCount={0}
								color="#fff"
								height="22px"
							/>
							<h1 className='profile-heading'>{userCheck ? "Your" : `${userInfo.name}'s`} Profile</h1>
						</div>
					</div>
					<div className="bottom-background">
						<div className="profile-card-glass">
							<div className="left-photo-section">
								<div className="user-photo-container">
									<img src={userInfo.cover ? userInfo.cover : "/user-photo.svg"} alt="userImage" className='user-photo' /> {/* fetch from user database */}
									{userCheck &&
										<div>
											<input
												name="profile-dp"
												id="profile-dp"
												className="file"
												type="file"
												placeholder=""
												onChange={(e) => {
													e.preventDefault();
													const updateInfo = new FormData();
													updateInfo.append("cover", e.target.files['0']);
													dispatch(updateUserCover({ updateInfo, token }))
												}}
												disabled={isUpdateLoading}
											/>
											<label htmlFor="profile-dp" className="edit-overlay">
												<img src="/pencil-dark.svg" alt="edit" />
											</label>
										</div>
									}
								</div>
							</div>
							<div className="right-info-section">
								<h1 className='user-name'>{userInfo.name}</h1> {/* fetch from user database */}
								{userInfo.isCreator && <div className="artist-tag">Artist</div>}
								<div className="bottom-right-section">
									<div className="stats">100 Followers <div className='dot' /> 100 Listeners</div> {/* fetch from user database */}
									{userInfo.isCreator && userCheck &&
										<button className='publish-btn' onClick={() => setShow(true)}> {/*if user == artist*/}
											<img src="/plus-icon.svg" alt="publish" className='plus-icon' />
											Publish
										</button>
									}
								</div>
							</div>
							{userCheck && <i className="fas fa-sign-out-alt"></i>}
						</div>
						<div className="song-section">
							{userInfo.isCreator && creations && !!creations.length &&
								<div className="category">
									<h1 className="category-name">{userCheck ? "Your" : `${userInfo.name}'s`} Songs</h1> {/*if user == artist*/}
									<div className="song-list">
										{creations.slice(0, 7).map((songInfo, id) => {
											return <SongCard song={songInfo} songs={creations} key={songInfo._id} />
										})}
									</div>
									{(creations.length > 7) && <button className='show-more-btn'>Show more</button>}
								</div>
							}
							{!!likedSongs.length &&
								<div className="category">
									<h1 className="category-name">{userCheck ? "Your" : `${userInfo.name}'s`} Favorites</h1>
									<div className="song-list">
										{likedSongs.slice(0, 7).map((songInfo, id) => {
											return <SongCard song={songInfo} songs={likedSongs} key={id} />
										})}
									</div>
									{(likedSongs.length > 7) && <button className='show-more-btn'>Show more</button>}
								</div>}
							{ratedSongs && !!ratedSongs.length &&
								<div className="category">
									<h1 className="category-name">Songs you rated</h1>
									<div className="song-list">
										{ratedSongs.slice(0, 7).map((songInfo, id) => {
											return <SongCard song={songInfo.creationId} songs={ratedSongs.map(rated => rated.creationId)} rating={1} key={id} />
										})}
									</div>
									{(ratedSongs.length > 7) && <button className='show-more-btn'>Show more</button>}
								</div>}
							<div className="category">
								<div className="d-flex justify-content-between align-items-center">
									<h1 className="category-name">{userCheck ? "Your" : `${userInfo.name}'s`} Playlists </h1>
									{userCheck &&
										<div className="playlist" onClick={() => setCreatePlaylistShow(true)}>
											<i className="fas fa-plus-circle"></i> Create Playlist
										</div>
									}
								</div>
								<div className="song-list">
									{playlists.slice(0, 7).map((playlist, id) => {
										return (
											<div className="playlist capitalize" onClick={() => history.push(`/${playlist._id}/songs`)}>{playlist.playlistName}</div> // if user == artist
										)
									})}
									{/* <div className="playlist" onClick={() => setCreatePlaylistShow(true)}> <i className="fas fa-plus-circle"></i> Create Playlist</div> */}
								</div>
								{(playlists.length > 7) && <button className='show-more-btn'>Show more</button>}
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default Profile;
