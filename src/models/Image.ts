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

export interface IImage {
  path: string,
  user?: string,
  description?: string,
  lastChange?: Date
}

export const imageModel = model('Image', imageScheema); 