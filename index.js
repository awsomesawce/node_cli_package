import * as os from 'os'
import * as path from 'path'

const mainProgram = path.resolve('./src/simple_commander.cjs')

console.info(`The program is located at ${mainProgram}`);
console.info(`Please invoke the program by using the command line:
node src/simple_commander.cjs`);
console.info(`This script is ${process.argv[1]}`);
