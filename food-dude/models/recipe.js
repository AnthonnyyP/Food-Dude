const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const commentSchema = new Schema(
  {
    comment: {
      type: String, 
      required: true, 
    },
    datePosted: {
      type: Date
    },
    rating: {
      type: Number, 
      min: 1,
      max: 5, 
      default: 5, 
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true, 
    },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true
  }
)

const recipeSchema = new Schema(
  {
    image: {
      type: String, 
    },
    title: {
      type: String
    },
    description: {
      type: String, 
    },
    timerequired: {
      type: Number,
      min: 1,
      max: 999,
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

module.exports = mongoose.model('Recipe', recipeSchema);