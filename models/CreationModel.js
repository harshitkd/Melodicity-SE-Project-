import mongoose from 'mongoose';

const creationSchema = new mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    creatorId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Creator"
    },
    cover :{
        type: String,
        required: true,
    },
    musicSrc :{
        type: String,
        required: true,
    },
    name :{
        type: String,
        required: true,
    },
    singer : {
        type : String,
        required: true
    }
},
{
    timestamps : true
})


const Creation = mongoose.model("Creation", creationSchema);

export default Creation;
