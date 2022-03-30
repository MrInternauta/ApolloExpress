export interface IUser {
  name: string,
  lastName?: string,
  bio?: string,
  email: string,
  password: string,
  phone: string,
  isActive?: boolean,
  lastChange?: Date
}