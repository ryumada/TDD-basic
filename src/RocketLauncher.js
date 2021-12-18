class RocketLauncher {
  constructor (rockets = []) {
    this.rockets = rockets
  }

  launchAllRockets () {
    this.rockets.forEach((rocket) => {
      rocket.engineStatus = 'active'
    })

    this.rockets = []
  }

  launchRocketByQueue () {
    const rockets = this.rockets.shift()
    rockets.engineStatus = 'active'
  }
}

module.exports = RocketLauncher
