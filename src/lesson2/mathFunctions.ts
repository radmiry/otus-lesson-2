export type BinaryFunction = (value1: number, value2: number) => number
export type UnaryFunction = (value1: number) => number

export const sum : BinaryFunction = (value1, value2) => value1 + value2;

export const deduct : BinaryFunction = (value1, value2) => value1 - value2;

export const div: BinaryFunction = (value1, value2 ) => value1 / value2;

export const multiplication: BinaryFunction = (value1, value2) => value1 * value2;

export const square: UnaryFunction = (value) => value * value;
