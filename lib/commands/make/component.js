'use strict'

const template = require('../../../lib/utilities/template')
// const replace = require('../../../lib/utilities/replace')
const log = require('../../../lib/utilities/log')

module.exports = name => {
  const exists = template.exists('component')
  if (!exists) return log.failure('The template file component doesn\'t exists.')

  const file = template.read('component')
  if (!file.length) return log.failure('Failed to load the template file.')

  log.success(`The component was generated.`)
}
