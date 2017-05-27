'use strict'

const fs = require('fs')
const path = require('path')

module.exports = (
  () => {
    /**
     * Get the relative path to the templates directory.
     * @return {String}
     */
    const relative = template => {
      const relative = path.resolve(__dirname)
      return `${relative}/../../templates/${template}.txt`
    }

    return template => {
      const path = relative(template)
      return fs.readFileSync(path, 'utf8')
    }
  }
)()
