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

export default model('Match', matchScheema);