/*
    id string pk
    username string
    email string
    fullName string
    avatar string 
    converImage string
    watchHistroy ObjectId[] videos
    password string
    refreshToken string 
    createdAt Date
    updatedAt Date
*/

// the above thing is just a refference and we have taken it from eraser tool,
// first step is to import mongoose here

// we are just destructuring it using { Schema }.....
import mongoose, { Schema } from "mongoose";
const userSchema  = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim : true,
            index: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname:{
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudinary URL
            required: true,
        },
        coverImage: {
            type: String,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true,"password is required"]
        },
        refreshToken: {
            type: String
        }
    },
    { timestamps: true}
)

export const User = mongoose.model("User",userSchmea); 

// A schema defines the structure of a document (a record) in a MongoDB collection
