import User from '../models/User';
import Like from '../models/Like';
import Match from '../models/Match';
import Image from '../models/Image';

import { GraphQLScalarType } from 'graphql';
import { GraphQLUpload } from 'graphql-upload';

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value: any) {
    return new Date(value); // value from the client
  },
  serialize(value: any) {
    return value.getTime(); // value sent to the client
  }
});
export const resolvers = {
  //Tipos customizados
  Query: {
    // getUser(userId: ID!): User
    getUser: async (_: any, {userId = ''}) => await User.findById(userId),
    // countLikes(userId: ID!): Int
    countLikes: async (_: any, {userId = ''}) => await Like.countDocuments({ followed: userId}),
    // countMatches(userId: ID!): Int
    countMatches: async (_: any, {userId = ''}) => await Match.countDocuments({ $or: [{ userA: userId}, { userB: userId}]}),
    // getImages(userId: ID!): [Image]
    getImages: async (_: any, {userId = ''}) => await Image.find({user: userId}),
    // getNewLikes(userId: ID!, perPage: Int, page: Int): [Like]
    getNewLikes: async (_: any, {userId = '', perPage = 10, page = 1}) => await Like.find({ user: userId, $and: [{ isCheked: false }] }),
    
    getNewMatches: async (_: any, {userId = '', perPage = 10, page = 1}) => await Like.find({ user: userId, $and: [{ isCheked: false }] }),
    // getMatches(userId: ID!, perPage: Int, page: Int): [Match]
    getMatches: async (_: any, {userId = '', perPage = 10, page = 1}) => await Match.find({ user: userId }),
    // getLikes(userId: ID!, perPage: Int, page: Int): [Like]
    getLikes: async (_: any, {userId = '', perPage = 10, page = 1}) => await Like.find({ user: userId })
  },
  
  Mutation: {

    // #User mutations
    // createUser(user: UserInput!): User
    // updateUser(userId: ID!, user: UserInput!): User
    // deleteUser(userId: ID!): User
  
    // #Image mutations
    // deleteImage(imageId: ID!): Image
    // updateImage(image: ImageInput!): Image
  
    // #Like mutations
    // createLike(like: LikeInput!): Like
    // updateLike(likeId: ID!, like: LikeInput!): Like
    // deleteLike(likeId: ID!): Like
  
    // #Match mutations
    // createMatch(match: MatchInput!): Match
    // updateMatch(matchId: ID!, match: MatchInput!): Match
    // deleteMatch(matchId: ID!): Match


    // createTask: async (_: any, task: { title: string, description: string }) => {
    //   const newTask = new Task({ title: task.title, description: task.description });
    //   await newTask.save();
    //   return newTask;
    // },

    // updateTask: async (_: any, updateTask: { id: string, task: any }) => {
    //   const taskNew = await Task.findByIdAndUpdate(updateTask.id, { $set: updateTask.task }, { new: true });
    //   return taskNew;
    // },

    // deleteTask: async (_: any, task: { id: string }) => {
    //   const taskDB = await Task.findById(task.id);
    //   if (!taskDB) return null;
    //   await taskDB.remove();
    //   return taskDB;
    // },

    // //User mutations
    // createUser: async (_: any, createUser: { user: any }) => {
    //   const newUser = new User(createUser);
    //   await newUser.save();
    //   return newUser;
    // },
    // updateUser: async (_: any, updateUser: { id: string, user: any }) => {
    //   const userNew = await User.findByIdAndUpdate(updateUser.id, { $set: updateUser.user }, { new: true });
    //   return userNew;
    // },
    // deleteUser: async (_: any, user: { id: string }) => {
    //   const userDB = await User.findById(user.id);
    //   if (!userDB) return null;
    //   await userDB.remove();
    //   return userDB;
    // }
  }, 

  Date: dateScalar,
  Upload: GraphQLUpload,

}

export default resolvers;
