import { Schema, model } from 'mongoose';

const likeScheema = new Schema({
  follower: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  followed: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  isActive: Boolean,
  isCheked: Boolean,
  lastChange: {
    type: Schema.Types.Date,
    default: Date.now()
  }
});

export default model('Like', likeScheema);