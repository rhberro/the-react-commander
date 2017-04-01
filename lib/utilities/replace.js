'use strict'

function replace (content, properties, property) {
  const find = new RegExp(`<%${property}%>`, 'g')
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
