import { BinaryFunction, BinaryFunctionOperators, UnaryFunction, UnaryFunctionOperators } from './mathFunctions'

export type Parsed = {
  firstValue: number
  operation: BinaryFunction | UnaryFunction
  secondValue?: number
}

export const parser = (valueToParse: string): Parsed => {
  const stack = valueToParse.split(' ')
  const firstValue = Number(stack[0])
  const isFirstValueInvalid = isNaN(firstValue)
  let isSecondValueInvalid = true

  let operation
  let secondValue

  if (stack.length === 2) {
    operation = UnaryFunctionOperators[stack[1]]
    isSecondValueInvalid = false
  } else if (stack.length > 2) {
    operation = BinaryFunctionOperators[stack[1]]
    secondValue = Number(stack[2])
    isSecondValueInvalid = isNaN(secondValue)
  }

  if (!isFirstValueInvalid && operation !== undefined && !isSecondValueInvalid) {
    return {
      firstValue: firstValue,
      operation: operation,
      secondValue: secondValue
    }
  }

  throw new TypeError('Invalid string given')
}
