const Task = require('../models/Task');
const resolvers = {
  //Tipos customizados
  Query: {
    hello: () => 'Hello world!',
    getAllTasks: async () => await Task.find(),
    getTask: async (_, { id }) => {
      return await Task.findById(id || '');
    },
    countTasks: async () => await Task.count()

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
    }
  }

}

module.exports = { resolvers };