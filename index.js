'use strict'

const commander = require('commander')

const commandNew = require('./lib/commands/new')
const commandMakeComponent = require('./lib/commands/make/component')
const commandMakeView = require('./lib/commands/make/view')

commander.version('0.0.0', '-v, --version')
commander.usage('the-react-commander <command> [options]')

commander.command('new <name>')
  .description('Create a new application.')
  .usage('<name> [options]')
  .action(commandNew)

commander.command('make:component <name>')
  .description('Make a new component.')
  .usage('<name> [options]')
  .action(commandMakeComponent)

commander.command('make:view <name>')
  .description('Make a new view.')
  .usage('<name> [options]')
  .action(commandMakeView)

if (process.argv.length === 2) commander.help()

commander.parse(process.argv)
