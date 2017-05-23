'use strict'

const fs = require('fs')
const path = require('path')

const relative = name => {
  const relative = path.resolve(__dirname)
  return `${relative}/../../templates/${name}.txt`
}

const exists = name => {
  const path = relative(name)
  return fs.existsSync(path, 'utf8')
}

const read = name => {
  const path = relative(name)
  return fs.readFileSync(path, 'utf8')
}

module.exports = { exists, read }
