import { parser } from './parser'
import { BinaryFunctionOperators, UnaryFunctionOperators } from './mathFunctions'

describe('String parses test: positive cases', () => {
  const mockString1 = '1 + 2'
  const mockString2 = '2 **'
  const mockString3 = '12 / 24'

  const result1 = parser(mockString1)
  it(`Result of parse ${mockString1}: 
firstValue = ${result1.firstValue} 
secondValue = ${result1.secondValue}
operation = ${result1.operation?.name}`, () => {
    expect(parser(mockString1)).toEqual({
      firstValue: 1,
      operation: BinaryFunctionOperators['+'],
      secondValue: 2
    })
  })

  const result2 = parser(mockString2)
  it(`Result of parse ${mockString2}:
firstValue = ${result2.firstValue}
secondValue = ${result2.secondValue}
operation = ${result2.operation?.name}`, () => {
    expect(parser(mockString2)).toEqual({
      firstValue: 2,
      operation: UnaryFunctionOperators['**'],
      secondValue: undefined
    })
  })

  const result3 = parser(mockString3)
  it(`Result of parse ${mockString3}:
firstValue = ${result3.firstValue}
secondValue = ${result3.secondValue}
operation = ${result3.operation?.name}`, () => {
    expect(parser(mockString3)).toEqual({
      firstValue: 12,
      operation: BinaryFunctionOperators['/'],
      secondValue: 24
    })
  })
})

describe('String parses test: negative cases', () => {
  const mockString1 = '2**'
  const mockString2 = '44 +'
  const mockString3 = '12 /'

  it(`Result of parse ${mockString1} is TypeError`, () => {
    expect(() => parser(mockString1)).toThrow(TypeError('Invalid string given'))
  })

  it(`Result of parse ${mockString2} is TypeError`, () => {
    expect(() => parser(mockString2)).toThrow(TypeError('Invalid string given'))
  })

  it(`Result of parse ${mockString3} is TypeError`, () => {
    expect(() => parser(mockString3)).toThrow(TypeError('Invalid string given'))
  })
})
