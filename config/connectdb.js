import mongoose from 'mongoose';

export const connectdb = () => {
    mongoose.connect(process.env.MONGO_URI,{
                useUnifiedTopology:true,
                useNewUrlParser:true,
                useCreateIndex:true
            })
            .then(() => console.log('MongoDB connnected'))
            .catch((err) => console.log('Error occured ' + err));
}