import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
    playlistName: {
        type: String,
        required: true,
      },
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    creationId :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Creation"
    }]
},
{
    timestamps : true
})


const Playlist = mongoose.model("Playlist", playlistSchema);

export default Playlist;
