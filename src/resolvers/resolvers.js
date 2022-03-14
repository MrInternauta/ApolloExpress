const Task = require('../models/Task');
const User = require('../models/User');
const resolvers = {
  //Tipos customizados
  Query: {
    hello: () => 'Hello world!',
    getAllTasks: async () => await Task.find(),
    getTask: async (_, { id }) => {
      return await Task.findById(id || '');
    },
    countTasks: async () => await Task.count(),
    //User queries
    getAllUsers: async () => await User.find(),
    getUser: async (_, { id }) => await User.findById(id || '')
  },

  Task: {
    done: (parent) => parent.done === true,
    otro: (parent) => "Holaa"
  },

  Mutation: {
    createTask: async (_, { title, description }) => {
      const newTask = new Task({ title, description });
      await newTask.save();
      return newTask;
    },

    updateTask: async (_, { id, task }) => {
      const taskNew = await Task.findByIdAndUpdate(id, { $set: task }, { new: true });
      return taskNew;
    },

    deleteTask: async (_, { id }) => {
      const task = await Task.findById(id || '');
      if (!task) return null;
      await task.remove();
      return task;
    },

    //User mutations
    createUser: async (_, { user }) => {
      const newUser = new User(user);
      await newUser.save();
      return newUser;
    },
    updateUser: async (_, { id, user }) => {
      const userNew = await User.findByIdAndUpdate(id, { $set: user }, { new: true });
      return userNew;
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findById(id || '');
      if (!user) return null;
      await user.remove();
      return user;
    }
  }

}

module.exports = { resolvers };