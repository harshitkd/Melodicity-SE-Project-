import User from "../models/UserModel.js"
import Connection from "../models/ConnectionModel.js"
import { getAllUsers } from "../utils/getAllUsers.js";
import { getCurrentUser } from "../utils/gerCurrentUser.js";

export const getUsers = async(req, res) => {
    
    try{
        const users = await getAllUsers(req.userId);
        if(!users)
            throw Error("Something went wrong, please try after some time.")
        res.status(200).send(users);

    }
    catch(err){
        res.status(400).send(err.message);
    }
}

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

export const addConnectionRequest = async(req, res) => {
    const data = {
        requester : req.userId,
        recipient : req.body.id,
        status : false
    }
    try{
        const currentUser = await User.findOne({_id : req.userId}).populate("connections");
        const flag = currentUser.connections.filter(connection => connection.requester === req.body.id).length;
        if(flag)
            throw Error("Please check notifications for this pending request.")
        const user = await User.findOne({_id : req.body.id});
        if(!user)
            throw Error("Cannot complete your request.")
        const newConnection = new Connection(data);
        const connection = await newConnection.save();

        user.connections.push(connection._id);
        await user.save();
        const users = await getAllUsers(req.userId);
        if(!users)
            throw Error("Something went wrong, please try after some time.")
        res.status(200).send(users);
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}

export const revokeConnectionRequest = async(req, res) => {
    try{
        const connection = await Connection.findOne({_id : req.body.id})
        if(!connection)
            throw Error("Request not found.")
        if(connection.requester != req.userId)
            throw Error("Not an allowed request");

        const user = await User.findOne({_id : connection.recipient}).populate("connections");
        user.connections = user.connections.filter(req => req._id !== req.body.id);
        await user.save();
        await connection.remove();
        const users = await getAllUsers(req.userId);
        if(!users)
            throw Error("Something went wrong, please try after some time.")
        res.status(200).send(users);
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}

export const endConnection = async(req, res) => {
    try{
        const connection = await Connection.findOne({_id : req.body.id})
        if(!connection)
            throw Error("Request not found.")
        
        const requester = await User.findOne({_id : connection.requester})
        const recipient = await User.findOne({_id : connection.recipient})
        requester.connections = requester.connections.filter(req => req._id !== req.body.id);
        recipient.connections = recipient.connections.filter(req => req._id !== req.body.id);
        await requester.save();
        await recipient.save();
        await connection.remove();
        const users = await getAllUsers(req.userId);
        if(!users)
            throw Error("Something went wrong, please try after some time.")
        res.status(200).send(users);

    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}

export const acceptConnectionRequest = async(req, res) => {
    try{
        const connection = await Connection.findOne({_id : req.body.id});
        if(connection.recipient != req.userId)
            throw Error("Not an allowed request");
        
        connection.status = true;
        await connection.save();
        const user = await User.findOne({_id : connection.requester});
        user.connections.push(connection._id);
        await user.save();
        const currentUser = await getCurrentUser(req.userId);
                                      
        if(!currentUser)
            throw Error("User you are looking for does not exist.")

        res.status(200).send(currentUser);
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}

export const rejectConnectionRequest = async(req, res) => {
    try{
        const connection = await Connection.findOne({_id : req.body.id})
        if(!connection)
            throw Error("Request not found.")
        if(connection.recipient != req.userId)
            throw Error("Not an allowed request");

        const user = await User.findOne({_id : req.userId}).populate("connections");
        user.connections = user.connections.filter(req => req._id !== req.body.id);
        await user.save();
        await connection.remove();
        const currentUser = await getCurrentUser(req.userId);
                                      
        if(!currentUser)
            throw Error("User you are looking for does not exist.")

        res.status(200).send(currentUser);
    }
    catch(err){
        res.status(400).send({message : err.message});
    }
}