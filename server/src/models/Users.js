import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    lastName : String , 
    firstName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const userModel = mongoose.model('users',userSchema)

export default userModel