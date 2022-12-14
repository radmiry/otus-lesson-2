import { calculate } from './engine'
import { Parsed } from './parser'
import { square, sum } from './mathFunctions'

describe('Calculate tests', () => {
  const mockedParsed1: Parsed = {
    firstValue: 1,
    operation: sum,
    secondValue: 2
  }
  const mockedParsed2: Parsed = {
    firstValue: 3,
    operation: square,
    secondValue: undefined
  }

  it(`Calc for ${mockedParsed1.firstValue} ${mockedParsed1.operation.name} ${mockedParsed1.secondValue}`, () => {
    expect(calculate(mockedParsed1)).toBe(3)
  })

  it(`Calc for ${mockedParsed2.firstValue} ${mockedParsed2.operation.name}`, () => {
    expect(calculate(mockedParsed2)).toBe(9)
  })
})
