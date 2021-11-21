import {Router} from 'express';
import { getAllSongs } from '../controllers/songsController.js'
import { protect } from '../middlewares/authMiddleware.js';

const router = Router();
router.route('/').get(protect, getAllSongs);

export default router;