const MarkdownIt = require('markdown-it');
const fs = require('fs');
const md = new MarkdownIt();

const arg1 = process.argv[2];
const arg2 = process.argv[3];
const file = arg1 ? arg1 : "../README.md"
const output = fs.readFileSync(file).toString();
const converted = md.render(output);
console.log(`${arg1} is first arg`);


function writeToFile(f, s) {
  fs.writeFileSync(f, s)
}
//writeToFile("newfile.html", converted)
