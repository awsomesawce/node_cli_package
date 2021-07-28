#!/usr/bin/env node
// Import my chalk funcs

import fs from 'fs';
import os from 'os';

import { 
  sayYellow,
  sayGreen,
  say,
  log,
  sayRed,
  redBlue
} from './chalkFuncs.mjs';



sayYellow("This will be yellow text")

sayGreen(`This will be green`);

sayRed(`The process args are ${process.argv}`)

/**
 * List all arguments of the process in yellow
 * separated by newlines
 */
for (let a in process.argv) {
  sayYellow(`${a}`)
}

redBlue("this is red", "this is blue")
