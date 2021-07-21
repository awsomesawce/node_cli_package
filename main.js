#!/usr/bin/env node
// Main entrypoint
let x = 4
function testforthree (x) {
if (x === 3) {
    let x = 3
    console.log(`The value of x is equal to 3.`);
} else {
    console.error(`The value of x is not equal to 3`);
}
}

testforthree()
