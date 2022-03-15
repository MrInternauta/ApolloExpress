import { Schema, model } from 'mongoose';
const userScheema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  image: String,
  phone: String
});

module.exports = model('User', userScheema);