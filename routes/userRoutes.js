import {Router} from 'express';
import { getUserDetails, publishSong, getAll } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';
import multer from 'multer'
import path from 'path'

const router = Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './client/public/uploads/'); 
      },
    filename:function(req,file,cb){
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});	

var upload=multer({
    storage:storage,
}).array("files",2)

router.route('/user/:id').get(protect, getUserDetails);
router.route('/all-users').get(protect, getAll);
router.route('/publish').post(protect,upload, publishSong)

export default router;