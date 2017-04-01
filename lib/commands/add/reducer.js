'use strict'

const template = require('../../../lib/utilities/template')
const log = require('../../../lib/utilities/log')

module.exports = name => {
  const exists = template.exists('reducer')
  if (!exists) return log.failure('The template file reducer doesn\'t exists.')
  log.success('Success.')
}
