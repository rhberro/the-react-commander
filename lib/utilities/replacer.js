'use strict'

function apply (content, properties, property) {
  const find = new RegExp(`/<%${property}%>/g`, 'g')
  const replace = properties[property]

  return content.replace(find, replace)
}

function replace (content, properties) {
  const keys = Object.keys(properties)

  return keys.reduce((content, property) => {
    return apply(content, properties, property)
  }, content)
}

module.exports = {
  replace
}
