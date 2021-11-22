import {Router} from 'express';
import { getAllSongs, addCreationRating, manageSongLike } from '../controllers/songsController.js'
import { protect } from '../middlewares/authMiddleware.js';

const router = Router();
router.route('/').get(protect, getAllSongs);
router.route('/rate').post(protect, addCreationRating);
router.route('/like').put(protect, manageSongLike);

export default router;