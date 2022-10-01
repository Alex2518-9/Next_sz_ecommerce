import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    userName: String,
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
        unique: true
    }
});

export const User = models.User || model('User', userSchema);