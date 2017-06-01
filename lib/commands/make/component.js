'use strict'

const template = require('../../../lib/utilities/template')
const replace = require('../../../lib/utilities/replace')
const generate = require('../../../lib/utilities/generate')

module.exports = name => {
  const properties = { name }

  const raw = template('component-stateful')
  if (!raw) {
    console.log('Missing template file.')
    process.exit(1)
  }

  const processed = replace(raw, properties)
  if (!processed) {
    console.log('Failed to build the template.')
    process.exit(1)
  }

  const generated = generate(`./app/components/${name}/${name}.js`, processed)

  console.log(generated, processed)
  console.log(`The component ${name} was generated.`)
}
