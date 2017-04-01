'use strict'

function log (message) {
  console.log(message)
}

function exit (code) {
  process.exit(code)
}

function success (message) {
  log(message)
  exit(0)
}

function failure (message) {
  log(message)
  exit(1)
}

function message (message, code) {
  log(message)
  exit(code)
}

module.exports = { message, success, failure }
