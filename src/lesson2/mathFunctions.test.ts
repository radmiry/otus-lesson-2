import { sum, deduct, div, square, multiplication } from './mathFunctions';

describe('Math functions test cases', () => {
  const value1 = Math.round(Math.random() * 10);
  const value2 = Math.round(Math.random() * 100);

  const resultOfSum = value1 + value2;
  it(`Sum of ${value1} and ${value2} = ${resultOfSum}`, () => {
    expect(sum(value1, value2)).toBe(resultOfSum);
  });

  const resultOfDeduct = value1 - value2;
  it(`Difference between ${value1} and ${value2} = ${resultOfDeduct}`, () => {
    expect(deduct(value1, value2)).toBe(resultOfDeduct);
  });
  const resultOfDeduct2 = value2 - value1;
  it(`Difference between ${value2} and ${value1} = ${resultOfDeduct2}`, () => {
    expect(deduct(value2, value1)).toBe(resultOfDeduct2);
  });

  const resultOfDiv = value1 / value2;
  it(`Div ${value1} / ${value2} = ${resultOfDiv}`, () => {
    expect(div(value1, value2)).toBe(resultOfDiv);
  });
});
