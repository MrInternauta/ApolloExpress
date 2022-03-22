import { connect } from 'mongoose';

async function ConnectDB() {
  try {
    return await connect('mongodb://localhost/ApolloServer');
    console.log('DB connected');
  } catch (error) {
    console.error(error);
  }

}

export default ConnectDB;
