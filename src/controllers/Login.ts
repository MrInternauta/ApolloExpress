import { imageModel, IUser, likeModel, matchModel, UserModel } from '../models';


export const login = (login: {
  email: String
  password: String
}) => <{ token: string }>{
}