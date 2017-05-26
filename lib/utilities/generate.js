'use strict'

const fs = require('fs')

module.exports = (
  () => {
    return (path, content) => {
      return fs.writeFileSync(path, content, 'utf8')
    }
  }
)()
