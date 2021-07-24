#!/usr/bin/env node

const os = require('os');
const path = require('path')

const commander = require('commander'); // include commander in git clone of commander repo

const program = new commander.Command();

// Commander supports nested subcommands.
// .command() can add a subcommand with an action handler or an executable.
// .addCommand() adds a prepared command with an action handler.

// Example output:
//
// $ node nestedCommands.js brew tea
// brew tea
// $ node nestedCommands.js heat jug
// heat jug
// Add nested commands using `.command()`.
const brew = program.command('brew');
brew
  .command('tea')
  .action(() => {
    console.log('Mmm that tea is gooood');
  });
brew
  .command('coffee')
  .action(() => {
    console.log('Mmm that coffee is delicious');
  });

// Add nested commands using `.addCommand().
// The command could be created separately in another module.
function makeHeatCommand() {
  const heat = new commander.Command('heat');
  heat
    .command('jug')
    .action(() => {
      console.log('heat jug');
    });
  heat
    .command('pot')
    .action(() => {
      console.log('heat pot');
    });
  return heat;
}
program.addCommand(makeHeatCommand());

program.parse(process.argv);

const options = program.opts();
if (options.more) {
  console.log('You added more tea');
}