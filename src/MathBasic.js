const MathBasic = {
  _validateArgs: (args) => {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima dua parameter')
    }

    args.forEach(arg => {
      if (typeof arg !== 'number') {
        throw new Error('fungsi hanya menerima parameter number')
      }
    })

    return args
  },
  add: (...args) => {
    const [a, b] = MathBasic._validateArgs(args)

    return a + b
  },
  substract: (...args) => {
    const [a, b] = MathBasic._validateArgs(args)

    return a - b
  },
  multiply: (...args) => {
    const [a, b] = MathBasic._validateArgs(args)

    return a * b
  },
  divide: (...args) => {
    const [a, b] = MathBasic._validateArgs(args)

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number')
    }

    return a / b
  }
}

module.exports = MathBasic
