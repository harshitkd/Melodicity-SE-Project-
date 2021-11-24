import User from "../models/UserModel.js"

export const getAllUsers = async(userId) => {
    try{      
        const vomitUsers = [userId];
        const users = await User.find({$and : [{_id : {$nin : vomitUsers}, isVerified : true}]}).populate("likedSongs");
        return users;
    }
    catch(err){
        return null;
    }
}