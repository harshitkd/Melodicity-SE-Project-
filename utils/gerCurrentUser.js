import User from "../models/UserModel.js"
import Creator from '../models/CreatorModel.js'
import Rating from '../models/RatingModel.js'
import Creation from '../models/CreationModel.js'

export const getCurrentUser = async(userId) => {
    try{
        const user = await User.findOne({_id : userId}).populate("likedSongs")
        if(user.isCreator){
            const creator = await Creator.findOne({userId : userId})
            user.name = creator.creatorName
        }
        const creations = await Creation.find({userId : userId})
        const rated = await Rating.find({userId : userId}).populate("creationId")
        
        const details = {
            ...user._doc,
            creations,
            rated
        }
        return details
    }
    catch(err){
        return null;
    }
}