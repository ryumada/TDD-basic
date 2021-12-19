class FigureCalculator {
  constructor (mathBasic) {
    this._mathBasic = mathBasic
  }

  _validateArgs (args, argsLength) {
    if (args.length !== argsLength) {
      throw new Error(`fungsi hanya menerima ${argsLength} parameter`)
    }

    args.forEach((arg) => {
      if (typeof arg !== 'number') {
        throw new Error('fungsi hanya menerima parameter number')
      }
    })
  }

  calculateRectanglePerimeter (...args) {
    this._validateArgs(args, 2)
    const [length, width] = args

    // formula: (2 * (length + width))
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width))
  }

  calculateRectangleArea (...args) {
    this._validateArgs(args, 2)
    const [length, width] = args

    return this._mathBasic.multiply(length, width)
  }

  calculateTrianglePerimeter (...args) {
    this._validateArgs(args, 3)
    const [sideA, sideB, sideC] = args

    return this._mathBasic.add(sideC, this._mathBasic.add(sideA, sideB))
  }

  calculateTriangleArea (...args) {
    this._validateArgs(args, 2)
    const [base, height] = args

    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2)
  }
}

module.exports = FigureCalculator
