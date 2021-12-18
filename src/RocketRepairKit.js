class RocketRepairKit {
  /**
   * anggap prosesnya rumit karena membutuhkan banyak dependencies
   */
  constructor (objA, objB, objC) {
    this.objA = objA
    this.objB = objB
    this.objC = objC
  }

  repair (rocket) {
    /**
     * anggap prosesnya diambil dari sautu service eksternal
     * sehingga prosesnya membutuhkan waktu dan rentan gagal
     */
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(`${rocket.name} repaired?!`)
      }, 500)
    })
  }
}

module.exports = RocketRepairKit
