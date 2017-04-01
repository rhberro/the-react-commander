'use strict'

const fs = require('fs')

function relative (template) {
  return `./templates/${template}.txt`
}

function exists (template) {
  const path = relative(template)
  return fs.existsSync(path, 'utf8')
}

function read (template) {
  const path = relative(template)
  return fs.readFileSync(path, 'utf8')
}

module.exports = { exists, read }
