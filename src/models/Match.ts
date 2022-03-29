import { Schema, model } from 'mongoose';

const matchScheema = new Schema({
  userA: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  userB: {
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


export interface IMatch {
  userA: string,
  userB: string,
  isActive: boolean,
  isCheked: boolean,
  lastChange?: Date
}

export const matchModel = model('Match', matchScheema);