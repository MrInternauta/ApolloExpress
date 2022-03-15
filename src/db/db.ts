import { connect } from 'mongoose';

async function ConnectDB() {
  try {
    await connect('mongodb://localhost/ApolloServer');
    console.log('DB connected');
  } catch (error) {
    console.error(error);
  }

}

module.exports = { ConnectDB }
