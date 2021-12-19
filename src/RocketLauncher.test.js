const Rocket = require('./Rocket')
const RocketLauncher = require('./RocketLauncher')

describe('A RocketLauncher', () => {
  it('should launch all rockets', () => {
    // Arrange
    const nasaRocket = new Rocket('Nasa')
    const spaceXRocket = new Rocket('SpaceX')
    // dummy
    const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket])

    // Action
    rocketLauncher.launchAllRockets()

    // Assert
    expect(nasaRocket.engineStatus).toEqual('active')
    expect(spaceXRocket.engineStatus).toEqual('active')
    expect(rocketLauncher.rockets.length).toEqual(0)
  })

  it('should launch only one rocket by queue', () => {
    // Arrange
    const nasaRocket = new Rocket('nasa')
    const spaceXRocket = new Rocket('SpaceX')
    // dummy
    const rocketLauncher = new RocketLauncher({}, [nasaRocket, spaceXRocket])

    // Action
    rocketLauncher.launchRocketByQueue()

    // Assert
    expect(nasaRocket.engineStatus).toEqual('active')
    expect(spaceXRocket.engineStatus).toEqual('inactive')
    expect(rocketLauncher.rockets.length).toEqual(1)
  })

  // stub example
  it('should return correct result when repair kit cannot repair the rocket', async () => {
    // Arrange
    /**
     * Stub?! butuh implementasi fungsi untuk menghasilkan keadaan sesuai skenario uji
     * naum kita tidak menguji apapun terkait fungsi yang diubah
     * membuat error boongan buat dicek apakah bakal menghasilkan return yang sesuai
     */

    const fakeRocketRepairKit = {
      repair: () => Promise.reject(new Error('failed to repair the rocket'))
    }

    const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [{}])

    // Action
    const result = await rocketLauncher.repairAllRockets()

    // Assert
    expect(result).toEqual('there was 1 of 1 rocket fail to repair')
  })

  // mock example
  it('should repair some repairable rocket when repair kit cannot repair some the rocket', async () => {
    // Arrange
    const repairableRocket = new Rocket('repairableRocket')
    const unrepairableRocket = new Rocket('unrepairableRocket')
    /**
     * Mock?! Kita butuh mengubah implementasi fungsi untuk menghasilkan keadaan sesuai skenario uji
     * dan kita butuh untuk menguji apakah fungsi yang dijalankan/diperlakukan
     */
    const fakeRocketRepairKit = {
      repair: jest.fn().mockImplementation((rocket) => {
        if (rocket.name === 'repairableRocket') {
          return Promise.resolve()
        }

        return Promise.reject(new Error('failed to repair the rocket'))
      })
    }

    const rocketLauncher = new RocketLauncher(fakeRocketRepairKit, [repairableRocket, unrepairableRocket])

    // Action
    const result = await rocketLauncher.repairAllRockets()

    // Assert
    expect(result).toEqual('there was 1 of 2 rocket fail to repair')
    /**
     * memastikan bahwa fungsi repair terpanggil
     */
    expect(fakeRocketRepairKit.repair).toBeCalled()
    expect(fakeRocketRepairKit.repair).toBeCalledWith(repairableRocket)
  })
})
