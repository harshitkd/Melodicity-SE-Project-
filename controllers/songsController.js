import mongoose from 'mongoose'
import Creation from '../models/CreationModel.js';
import Rating from '../models/RatingModel.js';
import User from '../models/UserModel.js'

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
            user.likedSongs = user.likedSongs.filter(creationId => creationId != req.body.creationId)
            await user.save();
            res.status(200).send({message : "Song removed from likes."});
        }
        else{
            user.likedSongs = [...user.likedSongs, req.body.creationId]
            await user.save();
            res.status(200).send({message : "Song added to likes."});
        }
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}

export const addCreationRating = async (req, res) => {
    try{
        const {rating, creationId} = req.body
        const rated = await Rating.findOne({$and : [{userId : req.userId, creationId : creationId}]})
        if(rated)
            throw Error("The song is already rated by you.")
        const rate = new Rating({
            userId : req.userId,
            creationId,
            rating
        })
        await rate.save();
        res.status(200).send({message : "Song rated succesfully."});
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}
