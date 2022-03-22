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
  lastChange: Schema.Types.Date,

});

export default model('Image', imageScheema);