import {Router} from 'express';
import { getUserDetails } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';


const router = Router();

router.route('/user/:id').get(protect, getUserDetails);

export default router;