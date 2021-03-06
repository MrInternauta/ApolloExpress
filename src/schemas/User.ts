import { Schema, model } from 'mongoose';
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
  },
  bio: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    requered: true
  },
  images: [{
    type: Schema.Types.ObjectId,
    ref: 'Image'
  }],
  youLiked: [{
    type: Schema.Types.ObjectId,
    ref: 'Like'
  }],
  matched: [{
    type: Schema.Types.ObjectId,
    ref: 'Match'
  }],
  isActive: Boolean,
  lastChange: {
    type: Schema.Types.Date,
    default: Date.now()
  }
});

export default model('User', userSchema); 
