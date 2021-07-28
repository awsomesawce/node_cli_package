#!/usr/bin/env node
/** @author Carl Capodice <awsomesawce at outlook dot com>
 * @fileoverview Exports chalk terminal functions and others.
 * Using ESM syntax
 */

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

const redBlue = (msg1, msg2) => {
  log(`${chalk.red(msg1)} is red and ${chalk.blue(msg2)} is blue`)
}

export { sayRed, log, say, sayYellow, sayGreen, redBlue };
