import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
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


const Rating = mongoose.model("Rating", ratingSchema);

export default Rating;
