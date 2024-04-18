//#!/usr/bin/env node
//this line call shebang,it tels the os to run it with node.js
// import the inquirer
import inquirer from "inquirer";

//declear a constant "answer" assinge it to the result of inquirer.prompt function

const answers:{
   sentence : string
 } = await inquirer.prompt([ 
    {  type: "input",
    name: "sentence",
    message: "enter your sentence to count the word?"
}
 ])

const words = answers.sentence.trim().split("")
//////............print the Array of the words  to the console///////

console.log(words)
const myname = "   asharib  ali   "
///print the Array of the words to the console//
console.log(`your sentence words is $ { words.length}`);

