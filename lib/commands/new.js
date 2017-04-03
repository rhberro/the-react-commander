'use strict'

const fs = require('fs')
const shelljs = require('shelljs')
const log = require('../utilities/log')

function checkCapability () {
  const hasGit = shelljs.which('git')
  const hasNode = shelljs.which('node')
  const hasNpm = shelljs.which('npm')

  return hasGit && hasNode && hasNpm
}

function checkAvailability (name) {
  return fs.existsSync(name)
}

function executeClone (name) {
  return shelljs.exec(`git clone git@github.com:rhberro/the-react-client.git ${name} --quiet`)
}

function installWithYarn (name) {
  return shelljs.exec(`cd ${name} && yarn --no-progress`)
}

function installWithNpm (name) {
  return shelljs.exec(`cd ${name} && npm install --silent`)
}

function executeInstall (name) {
  const hasYarn = shelljs.which('yarn')
  if (hasYarn) return installWithYarn(name)
  return installWithNpm(name)
}

module.exports = name => {
  const capable = checkCapability()
  if (!capable) log.failure('There are missing dependencies.')

  const unnavailable = checkAvailability(name)
  if (unnavailable) log.failure('The destination folder already exists.')

  const cloned = executeClone(name)
  if (cloned.code !== 0) log.failure('Failed to clone the project.')

  const installed = executeInstall(name)
  if (installed.code !== 0) log.failure('Filed to install the project.')

  log.success('The application has been created.')
}
