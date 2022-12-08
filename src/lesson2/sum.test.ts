import { sum } from './sum';

describe('Math functions test cases', () => {
  const value1 = Math.random();
  const value2 = Math.random();

  const resultOfSum = value1 + value2;
  it(`Sum of ${value1} and ${value2} = ${resultOfSum}`, () => {
    expect(sum(value1, value2) === resultOfSum);
  });
});
