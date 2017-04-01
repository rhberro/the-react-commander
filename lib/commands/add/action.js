'use strict'

const template = require('../../../lib/utilities/template')
const log = require('../../../lib/utilities/log')

module.exports = name => {
  const exists = template.exists('action')
  if (!exists) return log.failure('The template file action doesn\'t exists.')
  log.success('Success.')
}
