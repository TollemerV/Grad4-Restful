import mongoose from 'mongoose';
const { Schema } = mongoose;


const articleSchema = new Schema({
    imgUri : String , 
    prompt: String,
    categories : [],
    comments:[],
    user:userModel,
    publicationDate:Date,
    aiEngine: String

});

const userModel = mongoose.model('users',userSchema)

export default userModel