'use strict'

const log = message => {
  console.log(message)
}

const exit = code => {
  return process.exit(code)
}

const message = message => {
  log(message)
}

const success = message => {
  log(message)
  return exit(0)
}

const failure = message => {
  log(message)
  return exit(1)
}

module.exports = { message, success, failure }
