import mongoose from 'mongoose'
import Creation from '../models/CreationModel.js';

export const getAllSongs = async (req, res) => {
    try{
        const songs = await Creation.find({}).populate("creatorId")
        res.status(200).send(songs)
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}

export const manageSongLike = async (req, res) => {
    try{
        const user = await User.findOne({_id : req.userId})
        if(user.likedSongs.includes(req.body.creationId)){
            user.likedSongs = user.likedSongs.filter(songId !== req.body.creationId)
        }
        else{
            user.likedSongs = [...user.likedSongs, req.body.userId]
        }
        await user.save();
        res.status(200).send(user)
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}

