'use strict'

const fs = require('fs')
const shelljs = require('shelljs')

module.exports = (
  () => {
    const checkCapability = () => {
      const hasGit = shelljs.which('git')
      const hasNode = shelljs.which('node')
      const hasNpm = shelljs.which('npm')
      return hasGit && hasNode && hasNpm
    }

    const checkAvailability = name => {
      return fs.existsSync(name)
    }

    const executeClone = name => {
      return shelljs.exec(`git clone git@github.com:rhberro/the-react-client.git ${name} --quiet`)
    }

    const installWithYarn = name => {
      return shelljs.exec(`cd ${name} && yarn --silent`)
    }

    const installWithNpm = name => {
      return shelljs.exec(`cd ${name} && npm install --silent`)
    }

    const executeInstall = name => {
      const hasYarn = shelljs.which('yarn')
      if (hasYarn) return installWithYarn(name)
      return installWithNpm(name)
    }

    return name => {
      const capable = checkCapability()
      if (!capable) {
        console.log('There are missing dependencies.')
        process.exit(1)
      }

      const unnavailable = checkAvailability(name)
      if (unnavailable) {
        console.log('The destination folder already exists.')
        process.exit(1)
      }

      console.log('Cloning...')

      const cloned = executeClone(name)
      if (cloned.code !== 0) {
        console.log('Failed to clone the project.')
        process.exit(1)
      }

      console.log('Installing...')

      const installed = executeInstall(name)
      if (installed.code !== 0) {
        console.log('Installation aborted.')
        process.exit(1)
      }

      console.log('The application has been created.')
      process.exit(0)
    }
  }
)()
