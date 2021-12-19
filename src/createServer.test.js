const createServer = require('./createServer')

describe('Hapi Server', () => {
  it('should response 200 with payload value "Hello World" when GET /hello', async () => {
    // Arrange
    const server = createServer()

    // Action
    const response = await server.inject({
      method: 'GET',
      url: '/hello'
    })

    // Assert
    const responseJson = JSON.parse(response.payload)
    expect(response.statusCode).toEqual(200)
    expect(responseJson.value).toEqual('Hello World')
  })

  it('should response 200 with payload value "Hello ryu" when GET /hello/ryu', async () => {
    // Arrange
    const server = createServer()

    // Action
    const response = await server.inject({
      method: 'GET',
      url: '/hello/ryu'
    })

    // Assert
    const responseJson = JSON.parse(response.payload)
    expect(response.statusCode).toEqual(200)
    expect(responseJson.value).toEqual('Hello ryu')
  })
})
