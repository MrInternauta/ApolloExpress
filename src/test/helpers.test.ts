import { hashPassword } from '../helpers';

test('adds 1 + 2 to equal 3', () => {
  expect(hashPassword('')).toBe('');
});