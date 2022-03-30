import { connect } from 'mongoose';

async function ConnectDB() {
  try {
    return await connect('mongodb://localhost/ApolloServer');
  } catch (error) {
    console.error(error);
  }
}

export default ConnectDB;
