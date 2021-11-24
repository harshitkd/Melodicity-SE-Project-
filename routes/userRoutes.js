import {Router} from 'express';
import { getUserDetails, publishSong, getAll, addUserCover } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';
import multer from 'multer'
import path from 'path'

const router = Router();

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './client/public/uploads/'); 
      },
    filename:function(req,file,cb){
        cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});	

let upload=multer({
    storage:storage,
}).array("files",2)

let uploadCover=multer({
    storage:storage,
}).single("cover")

router.route('/user/:id').get(protect, getUserDetails);
router.route('/all-users').get(protect, getAll);
router.route('/publish').post(protect,upload, publishSong)
router.route('/add-user-cover').put(protect,uploadCover, addUserCover)


export default router;