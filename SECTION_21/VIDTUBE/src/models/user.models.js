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
import bcrypt  from "bcrypt";
import jwt from "jsonwebtoken";


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

userSchema.pre("save", async function (next){
    if(!this.modified("password"))  return next()
    this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessToken = function () {
    // short lived access token 
    return jwt.sign(
      {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
}

userSchema.methods.generateRefreshToken = function () {
  // short lived access token
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const User = mongoose.model("User",userSchmea); 

// A schema defines the structure of a document (a record) in a MongoDB collection
