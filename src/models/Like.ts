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
  lastChange: Schema.Types.Date
});

export default model('Like', likeScheema);