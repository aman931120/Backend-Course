/*
    owner ObjectId users
    videoFile string
    thumbnail string
    title string
    description string
    duration number
    views number
    isPublished boolean
    createdAt Date
    updatedAt Date
*/


import mongoose, { Schema }  from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
  videoFile: {
    type: String, // cloudanary URL
    required: true,
  },
  thumbnail: {
    type: String, // cloudanary URL
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  isPublished: {
    type: Number,
    default: true,
  },
  onwer: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
},{timestamps:true});

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model(("Video",videoSchema));
