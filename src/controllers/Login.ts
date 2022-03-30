import jsonwebtoken from 'jsonwebtoken';
import { hashPassword } from '../helpers';
import { comparePassword } from '../helpers/checkPassword';
import UserModel from '../schemas/User';
export const login = async (login: { email: string, password: string }) => {
  try {
    let user = await UserModel.findOne({ email: login.email }, 'email password').exec();
    if (!user) {
      throw new Error("Email or Password Invalid");
    }
    let isCorrectLogin = comparePassword(login.password, user.password);
    if (!isCorrectLogin) {
      throw new Error("Email or Password Invalid");
    }
    //TODO: Create jwt
    return {
      token: ""
    }
  } catch (error) {
    //TODO: Return a response
  }
}