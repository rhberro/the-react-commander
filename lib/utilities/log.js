'use strict'

module.exports = {
  success: message => {
    console.log(message)
    return process.exit(0)
  },
  failure: message => {
    console.log(message)
    return process.exit(1)
  }
}
