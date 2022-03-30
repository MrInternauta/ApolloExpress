import { Schema, model } from 'mongoose';

const imageScheema = new Schema({
  path: {
    type: String,
    required: true
  },
  description: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  lastChange: {
    type: Schema.Types.Date,
    default: Date.now()
  }
});

export default model('Image', imageScheema); 