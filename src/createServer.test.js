const createServer = require('./createServer')
const FigureCalculator = require('./FigureCalculator')
const MathBasic = require('./MathBasic')

const figureCalculator = new FigureCalculator(MathBasic)

const serverMathBasic = createServer({ mathBasic: MathBasic })
const serverFigureCalculator = createServer({ mathBasic: MathBasic, figureCalculator })

describe('An HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10
      const b = 20
      const spyAdd = jest.spyOn(MathBasic, 'add')

      // Action
      const response = await serverMathBasic.inject({
        method: 'GET',
        url: `/add/${a}/${b}`
      })

      // Assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(30) // a + b
      expect(spyAdd).toBeCalledWith(a, b)
    })
  })

  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 12
      const b = 8
      const spySubtract = jest.spyOn(MathBasic, 'subtract')

      // Action
      const response = await serverMathBasic.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`
      })

      // Assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(4) // a - b
      expect(spySubtract).toBeCalledWith(a, b)
    })
  })

  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
      // Arrange
      const a = 10
      const b = 10
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')

      // Action
      const response = await serverMathBasic.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`
      })

      // Assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(100) // a * b
      expect(spyMultiply).toBeCalledWith(a, b)
    })
  })

  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is distribution result of a and b correctly', async () => {
      // Arrange
      const a = 100
      const b = 10
      const spyDivide = jest.spyOn(MathBasic, 'divide')

      // Action
      const response = await serverMathBasic.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`
      })

      // Assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(10) // a / b
      expect(spyDivide).toBeCalledWith(a, b)
    })
  })

  describe('when GET /rectangle/perimeter', () => {
    it('should respond with a status code of 200. The payload value is the result of the rectangle perimeter formula correctly', async () => {
      // Arrange
      const length = 5
      const width = 4
      const spyCalculateRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter')

      // Action
      const response = await serverFigureCalculator.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`
      })

      // Assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(18) // 2 * (length + width)
      expect(spyCalculateRectanglePerimeter).toBeCalledWith(length, width)
    })
  })

  describe('when GET /rectangle/area', () => {
    it('should respond with a status code of 200. The payload values is the result of the rectangle area formula correctly', async () => {
      // Arrange
      const length = 5
      const width = 4
      const spyCalculateRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea')

      // Action
      const response = await serverFigureCalculator.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`
      })

      // Assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(20) // length * width
      expect(spyCalculateRectangleArea).toBeCalledWith(length, width)
    })
  })

  describe('when GET /triangle/perimeter', () => {
    it('should respond with a status of 200. The payload value is the result of the triangle perimeter formula correctly', async () => {
      // Arrange
      const sideA = 17
      const sideB = 8
      const sideC = 8
      const spyCalculateTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter')

      // Action
      const response = await serverFigureCalculator.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${sideC}`
      })

      // Assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(33) // sideA + sideB + sideC
      expect(spyCalculateTrianglePerimeter).toBeCalledWith(sideA, sideB, sideC)
    })
  })

  describe('when GET /triangle/area', () => {
    it('should respond with a status code of 200. The payload value is the result of the triangle area formula correctly', async () => {
      // Arrange
      const base = 5
      const height = 4
      const spyCalculateTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea')

      // Action
      const response = await serverFigureCalculator.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`
      })

      // Assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(10) // (base * height) / 2
      expect(spyCalculateTriangleArea).toBeCalledWith(base, height)
    })
  })
  // Ketika GET /triangle/area

  //     Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus luas segitiga
})
