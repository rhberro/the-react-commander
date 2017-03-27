'use strict'

const commander = require('commander')

commander.version('0.0.0', '-v, --version')
commander.usage('<command> [options]')

const forge = require('./lib/actions/forge')

commander.command('forge <name>')
  .description('Forge a new application.')
  .action(forge)

if (process.argv.length === 2) commander.help()

commander.parse(process.argv)
