import mongoose, { Schema, model } from 'mongoose';


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    },
    posts: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Posts"
        }
    ]
});

const User = model("User", userSchema);

export default User;