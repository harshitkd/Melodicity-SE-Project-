import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false
    }, 
    cover : {
      type : String
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    verificationLink : {
        type : String,
        default : null
    },
    isCreator : {
        type : Boolean,
        default : false
    },
    likedSongs : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Creation"
      }
    ]
},
{
    timestamps : true
})


const User = mongoose.model("User", userSchema);

export default User;
