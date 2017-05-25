'use strict'

const fs = require('fs')
const path = require('path')

/**
 * Get the relative path to the templates directory.
 * @return {String}
 */
const relative = template => {
  const relative = path.resolve(__dirname)
  return `${relative}/../../templates/${template}.txt`
}

/**
 * Check if the template exists with the given name.
 * @param  {String} template
 * @return {Boolean}
 */
const exists = template => {
  const path = relative(template)
  return fs.existsSync(path, 'utf8')
}

/**
 * Get the content of a template with the given name.
 * @param  {String}
 * @return {String}
 */
const read = template => {
  const path = relative(template)
  return fs.readFileSync(path, 'utf8')
}

module.exports = {
  exists,
  read
}
