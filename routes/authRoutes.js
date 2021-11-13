import {Router} from 'express';
import { login, signup, verify} from '../controllers/authController.js';

const router = Router();

router.route('/login').post(login);
router.route('/signup').post(signup);
router.route('/verify-user').put(verify);

export default router;