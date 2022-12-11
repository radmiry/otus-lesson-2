import { Parsed, parser } from './parser';

export const calculate = (parsedValues : Parsed) : number => {
  const action = parsedValues.operation
  return action(parsedValues.firstValue, parsedValues.secondValue)
}

export const processInput = (value : string) : number => {
  return calculate(parser(value))
}