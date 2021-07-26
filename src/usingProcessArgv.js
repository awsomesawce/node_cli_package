#!/usr/bin/env node
// Using process.argv instead

const os = require('os')
const json5 = require('json5')
const process = require('process')
const fs = require('fs-extra')
const path = require('path')
const _ = require('lodash')

const origDir = path.normalize('../')

nodeModules = fs.readdirSync('../node_modules')
// console.info('Here is the contents of node_modules')
// console.log(nodeModules)
var print = console.log
var log = console.log
print(origDir)
log()
log('Here are your script arguments')
log(process.argv.slice(2))
let coolness = () => {
  console.log(__filename)
  console.log(_.capitalize("this will be capitalized"))
}
let coolnessTwo = (msg) => {
  console.log(`msg is ${msg}`)
}

coolness()
coolnessTwo("Yoyoyo")
