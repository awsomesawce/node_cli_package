#!/usr/bin/env node
// Experimenting with node chalk
// Taken from node-chalk readme: https://github.com/chalk/chalk#readme


const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')

const chalkUrl = "https://github.com/chalk/chalk"

const log = console.log // Easy shortcut to console.log()

// This prints out red-white-blue message of "Hello World, and Carl!" 
log(chalk.blue('Hello') + ' World' + chalk.red(', and Carl!'))

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
