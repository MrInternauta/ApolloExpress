import { hashPassword } from "../helpers";
import { IUser } from "../models";
import UserModel from '../schemas/User';
export const createUser = async (_: any, user: IUser) => {
  try {
    const newUser = new UserModel({
      name: user.name,
      lastName: user.lastName || "",
      bio: user.bio || "",
      email: user.email,
      password: hashPassword(user.password),
      phone: user.phone,
      isActive: false
    });
    await newUser.save();
    return newUser;
  } catch (error) {
    console.error(error);
  }

}