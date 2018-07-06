console.log('Welcome to the calculator!');
const readline = require('readline-sync');

console.log('Please enter operator:');
const operator=readline.prompt();

console.log('How many numbers do you want to ' + operator + '?');
const response=readline.prompt();
const number = +response

var values=[];
var i;
for (i=0; i<number; i++) {
console.log('Please enter number', (i+1));
values[i]=+(readline.prompt());
}

var answer=values[0];
for (i=1; i<number; i++) {
    if (operator == '+') {
        answer += values[i];
    }
    else if (operator == '-') {
        answer -= values[i]
    }
    else if (operator == '*') {
        answer *= values[i];
    }
    else if (operator == '/') {
        answer /= values[i];
    }
    else {
    console.log('Invalid operator.')
    }
}

console.log('The answer is', (answer));

