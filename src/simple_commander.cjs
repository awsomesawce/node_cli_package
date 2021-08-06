#!/usr/bin/env node
// Simple commander usage from the beginning
// TODO: Copy file to {file_name}.ts to take advantage of typescript.

// Base Node API
const fs = require('fs-extra');
const os = require('os');
// eslint-disable-next-line no-unused-vars
const path = require('path');

// NPM Packages APIs
const commander = require('commander');

const program = new commander.Command();
program.version('0.1.1')

const log = console.log;
const homedir = os.homedir();

// My first command (isn't it beautiful?)
// TODO: Add an `.option()` for viewing the dir in a different way.
program.command('view <dir>')
  .description(`list the contents of the directory`)
  .action((dir) => {
    if (fs.pathExistsSync(dir)) {
      log(`The homedir on this system is ${homedir}`)
      log(`You typed ${dir}`)
      log(fs.readdirSync(dir))
    } else {
      console.error("Path does not exist")
    }
  })

program.command('echo <msg>')
  .description('Echo a message back to me')
  .action((msg) => {
    console.log(msg)
  })
 
program.command('debug')
  .description('emit debug messages')
  .action(() => {
    console.log(`process.argv is ${process.argv}`)
  })

program.command('listPaths')
  .description("Prints module.paths to stdout")
  .action(() => {
    console.log(module.paths.toLocaleString().split(','))
  })

program.parse(process.argv)
/*
* node simple_commander.js
*
*
*/
