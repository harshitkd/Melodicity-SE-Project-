import User from "../models/UserModel.js"

export const getAllUsers = async(userId) => {
    try{      
        const vomitUsers = [userId];
        const users = await User.find({_id : {$nin : vomitUsers}}).populate("connections");
        return users;
    }
    catch(err){
        return null;
    }
}