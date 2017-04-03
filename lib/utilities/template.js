'use strict'

const fs = require('fs')
const path = require('path')

/**
 * Returns the relative path of the template file.
 *
 * @param  {String} name
 * @return {String}
 */
function relative (name) {
  const relative = path.resolve(__dirname)
  return `${relative}/../../templates/${name}.txt`
}

/**
 * Check if the template file exists.
 *
 * @param  {String} name
 * @return {Boolean}
 */
function exists (name) {
  const path = relative(name)
  return fs.existsSync(path, 'utf8')
}

/**
 * Returns the content of the template file.
 *
 * @param  {String} name
 * @return {String}
 */
function read (name) {
  const path = relative(name)
  return fs.readFileSync(path, 'utf8')
}

module.exports = { exists, read }
