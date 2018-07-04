console.log('Welcome to the calculator!');
const readline = require('readline-sync');

console.log('Please enter first number:');
const response1=readline.prompt();

console.log('Please enter second number:');
const response2=readline.prompt();

var answ = parseFloat(response1)*parseFloat(response2);
console.log(response1, 'multiplied by', response2, 'is equal to', answ)