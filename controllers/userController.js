import mongoose from 'mongoose'
import Creation from "../models/CreationModel.js";
import Creator from "../models/CreatorModel.js"
import User from '../models/UserModel.js'
import { getCurrentUser } from "../utils/gerCurrentUser.js";
import { getAllUsers } from "../utils/getAllUsers.js";

export const getUserDetails = async(req, res) => {
    
    try{
        const user = await getCurrentUser(req.params.id);
                                      
        if(!user)
            throw Error("User you are looking for does not exist.")
        res.status(200).send(user);
    }
    catch(err){
        res.status(401).send({message : err.message});
    }
}

export const getAll = async(req, res) => {
    try{
        const users = await getAllUsers(req.userId);

        res.status(200).send(users);
    }
    catch(err){
        res.status(401).send({message : err.message});
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
        res.status(401).send({message : err.message});
    }
}

export const addUserCover = async (req, res) => {
    try{
        const cover = req.file.filename
        const user = await User.findOne({_id : req.userId})
        if(!user)
            throw Error("User not found.")
        user.cover = `/uploads/${cover}`;
        await user.save();

        const details = await getCurrentUser(req.params.id);
                                      
        if(!details)
            throw Error("User you are looking for does not exist.")
        res.status(200).send(details);
    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}