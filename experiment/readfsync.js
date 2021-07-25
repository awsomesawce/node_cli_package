#!/usr/bin/env node
// Read a file using nodejs and module syntax
const fs = require('fs-extra');
const path = require('path');
const marked = require('marked');
const os = require('os');
const crypto = require('crypto');
const figlet = require('figlet');
const chalk = require('chalk');
const sayyellow = (str) => {
  msg = chalk.bgYellow(str)
  return msg
}
const print = console.log
const log = console.log
const readFileSync = fs.readFileSync

let fonts = figlet.fontsSync()

const sayCyan = (str) => {
  let myStr = chalk.cyan(`${str}`)
  return console.log(myStr)
}

const sayCyanBig = (s) => {
  let thisStr = chalk.cyan(figlet.textSync(`${s}`))
  console.log(thisStr)
}

// let y = readFileSync('./README.md');
// print(y.toString());
// const networkI = os.networkInterfaces();
const curdir = fs.readdirSync('.');


console.log(`The contents of the current directory is:
${curdir}.`)



// print(`==== Network interface ====`);
// print(networkI);
// print('===========================');
// print();

sayCyanBig(`hello from cyan`);
// os.exit(1);
