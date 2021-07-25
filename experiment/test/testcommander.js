#!/usr/bin/env node
// A self-written example of a nodejs script

const os = require('os')
const path = require('path')
const log = console.log

const commander = require('commander')

const program = new commander.Command()

// Using .command()

const readHome = program.command('readHome')
readHome
  .command('dir')
  .action(() => {
    log('Well hello there')
  })

function makeTwoCommand () {
  const two = new commander.Command('two')
  two
    .command('hello')
    .action(() => {
      console.log('You entered two hello')
    })
  return two
}

program.addCommand(makeTwoCommand())

program.parse(process.argv)

// End of file
