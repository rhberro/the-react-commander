'use strict'

function regex (property) {
  const match = `<%${property}%>`
  return new RegExp(match, 'g')
}

function replace (content, properties, property) {
  const find = regex(property)
  const replace = properties[property]

  return content.replace(find, replace)
}

function apply (content, properties) {
  const keys = Object.keys(properties)

  return keys.reduce((content, property) => {
    return replace(content, properties, property)
  }, content)
}

module.exports = { apply }
