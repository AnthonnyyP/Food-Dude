const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const postSchema = new Schema (
{
  title: {
    type: String,
  },
  content: {
    type: String,
    required: true
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

module.exports = mongoose.model('Post', postSchema);