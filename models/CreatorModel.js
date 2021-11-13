import mongoose from 'mongoose';

const creatorSchema = new mongoose.Schema({
    creatorName: {
        type: String,
        required: true,
      },
    genre: [{
        type: String,
    }],
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},
{
    timestamps : true
})


const Creator = mongoose.model("Creator", creatorSchema);

export default Creator;
