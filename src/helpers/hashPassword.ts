import bcrypt from 'bcrypt';
const saltOrRounds = 10;

export function hashPassword(password: string) {
  return bcrypt.hashSync(password, saltOrRounds);
}