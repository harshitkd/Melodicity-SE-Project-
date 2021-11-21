import mongoose from 'mongoose';

const creatorSchema = new mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    creationId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Creation"
    },
    rating : {
        type : Number,
        required : true
    }
},
{
    timestamps : true
})


const Creator = mongoose.model("Creator", creatorSchema);

export default Creator;
