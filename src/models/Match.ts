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
  lastChange: Schema.Types.Date
});

export default model('Match', matchScheema);