import {Router} from 'express';
import { login, register, preRegister, verify} from '../controllers/authController.js';

const router = Router();

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/pre-register').post(preRegister);
router.route('/verify-user').put(verify);

export default router;