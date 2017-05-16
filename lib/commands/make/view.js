'use strict'

const template = require('../../../lib/utilities/template')
// const replace = require('../../../lib/utilities/replace')
const log = require('../../../lib/utilities/log')

module.exports = name => {
  const exists = template.exists('view')
  if (!exists) return log.failure('The template file view doesn\'t exists.')

  const file = template.read('view')
  if (!file.length) return log.failure('Failed to load the template file.')

  log.success(`The view was generated.`)
}
