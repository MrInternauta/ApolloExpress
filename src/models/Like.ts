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

export interface ILike {
  followed: string,
  follower: string,
  isActive: boolean,
  isCheked: boolean,
  lastChange?: Date
}
export const likeModel = model('Like', likeScheema);