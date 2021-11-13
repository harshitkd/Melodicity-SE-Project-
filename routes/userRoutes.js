import {Router} from 'express';
import { acceptConnectionRequest, addConnectionRequest, endConnection, getUserDetails, getUsers, rejectConnectionRequest, revokeConnectionRequest } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';


const router = Router();

router.route('/get-users').get(protect, getUsers);
router.route('/user/:id').get(protect, getUserDetails);
router.route('/connection-request/add').post(protect, addConnectionRequest);
router.route('/connection-request/revoke').delete(protect, revokeConnectionRequest);
router.route('/connection-request/end').delete(protect, endConnection);
router.route('/connection-request/accept').put(protect, acceptConnectionRequest);
router.route('/connection-request/reject').delete(protect, rejectConnectionRequest);

export default router;