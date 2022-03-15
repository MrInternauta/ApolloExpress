import { Schema, model } from 'mongoose';

const taskScheema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String
});

module.exports = model('Task', taskScheema);