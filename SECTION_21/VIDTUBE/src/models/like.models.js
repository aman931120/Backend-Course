import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
    {
        //either of 'video','comment' or 'tweet' will be assigned other are null
        video:{
            type:Schema.Types.ObjectId,
            ref:"Video",
        },
        comment:{
            type:Schema.Types.ObjectId,
            ref:"Comment",
        },
        tweet: {
            type: Schema.Types.ObjectId,
            ref: "Tweet",
        },
        likedBy: {
            type: Schema.Types.ObjectId,
            ref:"User",
        },
    },
    {timestamp: true},
);




