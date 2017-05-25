'use strict'

const log = require('../../../lib/utilities/log')

module.exports = name => {
  log.success(`The component ${name} was generated.`)
}
