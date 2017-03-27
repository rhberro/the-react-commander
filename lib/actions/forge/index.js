'use strict'

const fs = require('fs')
const shelljs = require('shelljs')

function checkCapability () {
  const hasGit = shelljs.which('git')
  const hasNode = shelljs.which('node')
  const hasNpm = shelljs.which('npm')

  return hasGit && hasNode && hasNpm
}

function checkAvailability (name) {
  const unnavailable = fs.existsSync(name)
  return unnavailable
}

function executeClone (name) {
  return shelljs.exec(`git clone git@github.com:rhberro/the-react-client.git ${name} --quiet`)
}

function installWithYarn (name) {
  return shelljs.exec(`cd ${name} && yarn`)
}

function installWithNpm (name) {
  return shelljs.exec(`cd ${name} && npm install`)
}

function executeInstall (name) {
  const hasYarn = shelljs.which('yarn')
  if (hasYarn) return installWithYarn(name)
  return installWithNpm(name)
}

module.exports = function (name) {
  const capable = checkCapability()
  if (!capable) return console.log('There are missing dependencies.')

  const unnavailable = checkAvailability(name)
  if (unnavailable) return console.log('The destination folder already exists.')

  const cloned = executeClone(name)
  if (cloned.code !== 0) return console.log('Failed to clone the project.')

  const installed = executeInstall(name)
  if (installed.code !== 0) return console.log('Failed to change run npm install.')

  console.log('Done.')
}
