import User from '../models/User';
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
    // getAllTasks: async () => await Task.find(),
    // getTask: async (_: any, task: { id: string }) => {
    //   return await Task.findById(task.id);
    // },
    // countTasks: async () => await Task.count(),
    // //User queries
    // getAllUsers: async () => await User.find(),
    // getUser: async (_: any, user: { id: string }) => await User.findById(user.id)
  },

  // Task: {
  //   done: (parent: { done: boolean }) => parent.done === true,
  //   otro: (parent: any) => "Holaa"
  // },

  Mutation: {
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
