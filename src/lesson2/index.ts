import { createInterface } from 'readline'

import { processInput } from './engine'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (): Promise<null> =>
  new Promise((resolve) => {
    rl.question('> ', (answer: string) => {
      const result = processInput(answer)

      if (result !== undefined) {
        console.log(`Result: ${result}`)
      }
      resolve(null)
    })
  })

async function app(): Promise<null> {
  while (true) {
    await question()
  }
}

app()
