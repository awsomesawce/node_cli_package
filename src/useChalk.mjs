#!/usr/bin/env node
// Import my chalk funcs

import fs from 'fs';
import os from 'os';

import { 
  sayYellow,
  sayGreen,
  say,
  log,
  sayRed
} from './chalkFuncs.mjs';



sayYellow("This will be yellow text")

sayGreen(`This will be green`);

sayRed(`The process args are ${process.argv}`)

for (let a in process.argv) {
  sayYellow(`${a}`)
}
