#!/usr/bin/env node
// A self-written example of a nodejs script

const os = require('os')
const path = require('path')
const log = console.log

const commander = require('commander')

const prog = new commander.Command()

// Using .command()

const one = prog.command('one')
one
  .command('another')
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

prog.addCommand(makeTwoCommand())

prog.parse(process.argv)

// End of file
