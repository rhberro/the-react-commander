'use strict'

const commander = require('commander')

const commandNew = require('./lib/commands/new')
const commandMakeComponent = require('./lib/commands/make/component')
const commandMakeView = require('./lib/commands/make/view')
const commandAddReducer = require('./lib/commands/add/reducer')
const commandAddAction = require('./lib/commands/add/action')

commander.version('0.0.0', '-v, --version')
commander.usage('the-react-commander <command> [options]')

commander.command('new <name>')
  .description('Create a new application.')
  .usage('new <name> [options]')
  .action(commandNew)

commander.command('make:component <name>')
  .description('Make a new component.')
  .action(commandMakeComponent)

commander.command('make:view <name>')
  .description('Make a new view.')
  .action(commandMakeView)

commander.command('add:reducer <name>')
  .description('Add a new reducer.')
  .action(commandAddReducer)

commander.command('add:action <name>')
  .description('Add a new action.')
  .action(commandAddAction)

if (process.argv.length === 2) commander.help()

commander.parse(process.argv)
