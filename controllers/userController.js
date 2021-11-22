import mongoose from 'mongoose'
import Creation from "../models/CreationModel.js";
import Creator from "../models/CreatorModel.js"
import { getCurrentUser } from "../utils/gerCurrentUser.js";

export const getUserDetails = async(req, res) => {
    
    try{
        const user = await getCurrentUser(req.params.id);
                                      
        if(!user)
            throw Error("User you are looking for does not exist.")
        res.status(200).send(user);
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}

export const publishSong = async(req, res) => {
    try{
        const {name} = req.body
        const coverImageUrl = req.files[0].filename
        const audioUrl = req.files[1].filename
        if(!mongoose.connection.readyState)
            throw Error('Check your internet connection before proceeding.')
            
        let creator = await Creator.findOne({userId : req.userId});
        
        const creation = new Creation({
            name,
            cover : `/uploads/${coverImageUrl}`,
            userId: req.userId,
            creatorId : creator._id,
            musicSrc : `/uploads/${audioUrl}`,
            singer : creator.creatorName
        });
        
        await creation.save();
        
        const user = await getCurrentUser(req.userId);
                                      
        if(!user)
            throw Error("User you are looking for does not exist.")
            
        res.status(200).send(user);
    }
    catch(err){
        console.log(err.message)
        res.status(400).send({message : err.message});
    }
}
