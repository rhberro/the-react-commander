'use strict'

function log (message) {
  console.log(message)
}

function exit (code) {
  return process.exit(code)
}

function success (message) {
  log(message)
  return exit(0)
}

function failure (message) {
  log(message)
  return exit(1)
}

function message (message, code = 0) {
  log(message)
  return exit(code)
}

module.exports = { message, success, failure }
