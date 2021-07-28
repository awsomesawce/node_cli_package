#!/usr/bin/env node

/**
 * For interacting with nodejs repl
 *
 */
const fs = require('fs-extra') /** Drop-in replacement for node's fs library */
const path = require('path')
const os = require('os')
const childproc = require('child_process')
console.log('Nodejs repl ready!')
