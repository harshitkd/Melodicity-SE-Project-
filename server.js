import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import songRoutes from './routes/songRoutes.js'
import { connectdb } from './config/connectdb.js';
import * as path from 'path'

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
connectdb();

app.use(cors());
app.use(express.json());
app.use('/api/user/auth-routes', authRoutes);
app.use('/api/user/user-routes', userRoutes);
app.use('/api/songs/song-routes', songRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, ()=>{
    console.log("Server running on port " + port);
})