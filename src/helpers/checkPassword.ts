import bcrypt from 'bcrypt';

export function comparePassword(myPlaintextPassword: string, hash: string) {
  return bcrypt.compareSync(myPlaintextPassword, hash);
}