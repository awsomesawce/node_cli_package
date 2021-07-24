#!/usr/bin/env node
// Simple commander usage from the beginning
// TODO: Copy file to {file_name}.ts to take advantage of typescript.

// Base Node API
const fs = require('fs-extra')
const homedir = require('os').homedir()
// eslint-disable-next-line no-unused-vars
const path = require('path')

// NPM Packages APIs
const commander = require('commander')

const program = new commander.Command()
program.version('0.0.1')

const log = console.log

// My first command (isn't it beautiful?)
// TODO: Add an `.option()` for viewing the dir in a different way.
program.command('view <dir>')
  .description(`view the directory
  The current directory used is homedir`)
  .action((err, dir = homedir) => {
    if (err) { console.error(`Error finding ${dir} in this filesystem.`) }
    else {
      log(`The homedir on this system is ${homedir}`)
      log(`You typed ${dir}`)
      log(fs.readdirSync(dir))
    }
  })

program.parse(process.argv)
/*
* node simple_commander.js
*
*
*/
