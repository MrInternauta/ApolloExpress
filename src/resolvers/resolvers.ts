import { GraphQLScalarType } from 'graphql';
import { GraphQLUpload } from 'graphql-upload';
import { createUser, login } from '../controllers';
import { hashPassword } from '../helpers';

import { imageModel, IUser, likeModel, matchModel, UserModel } from '../models';

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
export const Resolvers = {
  //Tipos customizados
  Query: {
    // getUser(userId: ID!): userModel
    getUser: async (_: any, { userId = '' }) => await UserModel.findById(userId),

    // countLikes(userId: ID!): Int
    countLikes: async (_: any, {userId = ''}) => await likeModel.countDocuments({ followed: userId}),

    // countMatches(userId: ID!): Int
    countMatches: async (_: any, {userId = ''}) => await matchModel.countDocuments({ $or: [{ userA: userId}, { userB: userId}]}),

    // getImages(userId: ID!): [Image]
    getImages: async (_: any, { userId = '' }) => await UserModel.find({ user: userId }),

    // getNewLikes(userId: ID!, perPage: Int, page: Int): [likeModel]
    getNewLikes: async (_: any, {userId = '', perPage = 10, page = 1}) => await likeModel.find({ user: userId, $and: [{ isCheked: false }] }),
    
    getNewMatches: async (_: any, {userId = '', perPage = 10, page = 1}) => await likeModel.find({ user: userId, $and: [{ isCheked: false }] }),

    // getMatches(userId: ID!, perPage: Int, page: Int): [matchModel]
    getMatches: async (_: any, {userId = '', perPage = 10, page = 1}) => await matchModel.find({ user: userId }),
    
    // getLikes(userId: ID!, perPage: Int, page: Int): [likeModel]
    getLikes: async (_: any, {userId = '', perPage = 10, page = 1}) => await likeModel.find({ user: userId })
  },
  
  Mutation: {
    //Login
    login,
    // #userModel mutations
    createUser,
    // updateUser(userId: ID!, user: UserInput!): userModel
    // deleteUser(userId: ID!): userModel

    // #Image mutations
    // deleteImage(imageId: ID!): Image
    // updateImage(image: ImageInput!): Image

    // #likeModel mutations
    // createLike(like: LikeInput!): likeModel
    // updateLike(likeId: ID!, like: LikeInput!): likeModel
    // deleteLike(likeId: ID!): likeModel

    // #matchModel mutations
    // createMatch(match: MatchInput!): matchModel
    // updateMatch(matchId: ID!, match: MatchInput!): matchModel
    // deleteMatch(matchId: ID!): matchModel


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

    // //userModel mutations
    // createUser: async (_: any, createUser: { user: any }) => {
    //   const newUser = new userModel(createUser);
    //   await newUser.save();
    //   return newUser;
    // },
    // updateUser: async (_: any, updateUser: { id: string, user: any }) => {
    //   const userNew = await userModel.findByIdAndUpdate(updateUser.id, { $set: updateUser.user }, { new: true });
    //   return userNew;
    // },
    // deleteUser: async (_: any, user: { id: string }) => {
    //   const userDB = await userModel.findById(user.id);
    //   if (!userDB) return null;
    //   await userDB.remove();
    //   return userDB;
    // }

  }, 

  Date: dateScalar,
  Upload: GraphQLUpload
}
