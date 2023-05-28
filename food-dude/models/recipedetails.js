const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const recipeDetailSchema = new Schema (
  {
    title: {
      type: String,
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
      type: Date, 
    },
    userName: String,
    userAvatar: String, 
    comments: [commentSchema]
  }, {
    timestamps: true
  });
  
  const commentSchema = new Schema (
    {
      title: {
        type: String,
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
        type: Date, 
      },
      userName: String,
      userAvatar: String, 
    }, {
      timestamps: true
    });




  module.exports = mongoose.model('Recipe Details', recipeDetailSchema);