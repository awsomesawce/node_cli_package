#!/usr/bin/env node

const fetch = require('node-fetch')
const url = require('url')
//const fs = require('fs-extra')
const http = require('http')
const got = require('got')
const log = console.log

const chalk = require('chalk')

const myUrl = new URL('http://github.com')

// const x = (myUrl, myCode = 200) => {
//     http.request('Get', myUrl)
// }
log(myUrl)
