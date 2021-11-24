import {Router} from 'express';
import { getAllSongs, addCreationRating, manageSongLike, createPlaylist, addToPlaylist, getPlaylistSongs } from '../controllers/songsController.js'
import { protect } from '../middlewares/authMiddleware.js';

const router = Router();
router.route('/').get(protect, getAllSongs);
router.route('/:playlistId').get(protect, getPlaylistSongs);
router.route('/rate').post(protect, addCreationRating);
router.route('/like').put(protect, manageSongLike);
router.route('/playlist/create-playlist').post(protect, createPlaylist);
router.route('/playlist/add-to-playlist').put(protect, addToPlaylist);

export default router;