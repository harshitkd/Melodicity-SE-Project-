import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import nodeMailer from 'nodemailer';
import generateJwt from "../utils/generateJwt.js";
import crypto from 'crypto';
import mongoose from 'mongoose';

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'iiit.com.help@gmail.com',
      pass: 'iiit.com'
    }
});

export const login = async(req,res) => {
    const { email, password} = req.body;
    
    try{
        if(!mongoose.connection.readyState)
            throw Error('Check your internet connection before proceeding.')

        const user = await User.findOne({email : email.toLowerCase()}).select("+password");
        if(!user)
            throw Error('User does not exist');

        if(!user.verified)
            throw Error('Please verify your Email before proceeding to login.')
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) 
            throw Error('Invalid credentials');

        res.status(200).json({ token : generateJwt(user._id), userId : user._id});
    }
    catch (error) {
        res.status(400).json({ message : error.message });
    }
}

export const signup = async(req,res) => {
    const { email, password, name} = req.body;
    
    try{
        if(!mongoose.connection.readyState)
            throw Error('Check your internet connection before proceeding.')

        let user = await User.findOne({email : email.toLowerCase()});
        if(user)
            throw Error('Email already registered');
        
        user = new User({
            email: email.toLowerCase(),
            password,
            name
        });
        
        user.password = await bcrypt.hash(password, 10);
        await user.save();

        crypto.randomBytes(64, async (err, buffer) => {
            const generatedString = buffer.toString('hex');
            const mailOptions = {
                from: 'iiit.com.help@gmail.com',
                to: user.email,
                subject: 'Email Verification',
                text: 'http://localhost:3000/verify/' + user._id +'/'+ generatedString + '/login'
              };
            user.verificationLink = await bcrypt.hash(generatedString, 10);
            await user.save();
            transporter.sendMail(mailOptions, (error, info)=>{
              if (error) {
                  res.status(400).json({ message : 'Could not complete the request to send verification mail.' });
              } 
              else {
                res.status(200).json({message : 'Confirmation Email has been sent to the registered Email-Id. Please confirm it to LogIn'})
              }
            });
        })
    }
    catch (error) {
        res.status(400).json({ message : error.message });
    }
}

export const verify = async (req, res) => {
    const { verificationLink, _id } = req.body;
    try{
        if(!mongoose.connection.readyState)
            throw Error('Check your internet connection before proceeding.')
            
        const user = await User.findOne({_id});

        if(!user)
            throw Error('Verification link is incorrect or has beed expired.')
        
        if(!user.verificationLink)
        throw Error('User already verified proceed to login.')
        const isMatch = await bcrypt.compare(verificationLink, user.verificationLink);
        if (!isMatch) 
            throw Error('Verification link is incorrect or has beed expired.');

        user.verified = true;
        user.verificationLink = null;
        await user.save();

        res.status(200).json({ message : 'Email Id successfully verified. Proceed to login.' })
    }
    catch(error){
        res.status(400).json({message : error.message});
    }
}