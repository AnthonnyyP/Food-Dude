const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    title: {
      type: String
    },
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    datePosted: {
      type: Date
    },
    userName: String,
    userAvatar: String
  },
  {
    timestamps: true
  }
)

const newRecipeSchema = new Schema(
  {
    title: {
      type: String
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    datePosted: {
      type: Date
    },
    user: {
      userName: String,
      userAvatar: String
    },
    ingredients: {
      type: String
    },
    instructions: {
      type: String
    },
    comments: [commentSchema]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('New Recipe', newRecipeSchema)
