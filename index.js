console.log('Welcome to the calculator!');
const readline = require('readline-sync');

console.log('Please enter operator:');
const operator=readline.prompt();

if (operator=='*') {
    console.log('Please enter first number:');
    const response1=readline.prompt();
    const number1 = +response1;
    
    console.log('Please enter second number:');
    const response2=readline.prompt();
    const number2 = +response2;
    
    var answ = number1 * number2;
console.log(response1, 'multiplied by', response2, 'is equal to', answ);

} else if (operator=='+') {
console.log('Please enter first number:');
const response1=readline.prompt();
const number1 = +response1;

console.log('Please enter second number:');
const response2=readline.prompt();
const number2 = +response2;

var answ = number1 + number2;
console.log(response1, 'added to', response2, 'is equal to', answ);
    
} else if (operator=='-') {
    console.log('Please enter first number:');
    const response1=readline.prompt();
    const number1 = +response1;
    
    console.log('Please enter second number:');
    const response2=readline.prompt();
    const number2 = +response2;
    
    var answ = number1 - number2;
console.log(response1, 'minus', response2, 'is equal to', answ);

} else if (operator=='/') {
    console.log('Please enter first number:');
const response1=readline.prompt();
const number1 = +response1;

console.log('Please enter second number:');
const response2=readline.prompt();
const number2 = +response2;

var answ = number1 / number2;
console.log(response1, 'divided by', response2, 'is equal to', answ);

} else {
console.log('Invalid operator.')
}