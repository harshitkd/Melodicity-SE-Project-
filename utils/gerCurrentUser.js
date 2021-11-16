import User from "../models/UserModel.js"
import Creator from '../models/CreatorModel.js'

export const getCurrentUser = async(userId) => {
    try{
        const user = await User.findOne({_id : userId})
        if(user.isCreator){
            const creator = await Creator.findOne({userId : userId})
            user.name = creator.creatorName
        }
        return user;
    }
    catch(err){
        return null;
    }
}