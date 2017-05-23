'use strict'

const fs = require('fs')
const shelljs = require('shelljs')
const log = require('../utilities/log')

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
  return shelljs.exec(`cd ${name} && yarn --no-progress`)
}

const installWithNpm = name => {
  return shelljs.exec(`cd ${name} && npm install --silent`)
}

const executeInstall = name => {
  const hasYarn = shelljs.which('yarn')
  if (hasYarn) return installWithYarn(name)
  return installWithNpm(name)
}

module.exports = name => {
  const capable = checkCapability()
  if (!capable) log.failure('There are missing dependencies.')

  const unnavailable = checkAvailability(name)
  if (unnavailable) log.failure('The destination folder already exists.')

  log.message('Cloning...')

  const cloned = executeClone(name)
  if (cloned.code !== 0) log.failure('Failed to clone the project.')

  log.message('Installing...')

  const installed = executeInstall(name)
  if (installed.code !== 0) log.failure('Installation aborted.')

  log.success('The application has been created.')
}
