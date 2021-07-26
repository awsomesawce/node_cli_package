#!/usr/bin/env node
// Initiate and export chalk functions
// Using ESM syntax

import chalk from 'chalk';
import module from 'module';
//import figlet from 'figlet';
const log = console.log
const say = console.log

const sayYellow = (msg) => {
  log(chalk.yellowBright(`${msg}`))
}

const sayGreen = (msg) => {
  log(chalk.green(`${msg}`))
}

const sayRed = (msg) => {
  log(chalk.red(msg))
}

export { sayRed, log, say, sayYellow, sayGreen };
