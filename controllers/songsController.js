import mongoose from 'mongoose'
import Creation from '../models/CreationModel.js';
import Rating from '../models/RatingModel.js';
import User from '../models/UserModel.js'
import Playlist from '../models/PlaylistModel.js'
import { getCurrentUser } from '../utils/gerCurrentUser.js';

export const getAllSongs = async (req, res) => {
    try{
        const songs = await Creation.find({}).populate("creatorId")
        res.status(200).send(songs)
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}

export const getPlaylistSongs = async (req, res) => {
    try{
        const playlist = await Playlist.findOne({_id : req.params.playlistId}).populate("creationId")
        res.status(200).send(playlist.creationId)
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}

export const manageSongLike = async (req, res) => {
    try{
        const user = await User.findOne({_id : req.userId})
        let message
        if(user.likedSongs.includes(req.body.creationId)){
            user.likedSongs = user.likedSongs.filter(creationId => creationId != req.body.creationId)
            await user.save();
            message = "Song removed from likes.";
        }
        else{
            user.likedSongs = [...user.likedSongs, req.body.creationId]
            await user.save();

            message = "Song added to likes.";
        }
        const userd = await getCurrentUser(req.userId)
        const details = {
            user : userd,
            message
        }
        res.status(200).send(details)
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

export const createPlaylist = async (req, res) => {
    try{
        const {name, creationId} = req.body
        let message
        let playlist = await Playlist.findOne({$and : [{userId : req.userId, playlistName : name.toLowerCase()}]})
        if(playlist)
            throw Error("The name for the playlist is already taken.")
        
        playlist = new Playlist({
            playlistName : name.toLowerCase(),
            userId : req.userId
        })
        message = "Playlist created successfully."
        if(creationId){
            playlist.creationId = [creationId]
            message = "Playlist created and song added to it."
        }
        await playlist.save();
        
        const user = await getCurrentUser(req.userId)
        const details = {
            user,
            message
        }
        res.status(200).send(details)
    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}

export const addToPlaylist = async (req, res) => {
    try{
        const {playlistId, creationId} = req.body
        let playlist = await Playlist.findOne({_id : playlistId})
        if(!playlist)
            throw Error("No such playlist exists.")
        
        if(playlist.creationId.includes(creationId))
            throw Error("Selected song already in the playlist.")

        playlist.creationId = [...playlist.creationId, creationId]

        await playlist.save();
        
        const user = await getCurrentUser(req.userId)
        const details = {
            user,
            message : "Song added to the playlist successfully."
        }
        res.status(200).send(details)
    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}