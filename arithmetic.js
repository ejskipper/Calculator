const readline = require('readline-sync');

function enterNumber(promptText) {
    console.log(promptText);
    const response=readline.prompt();
    const maybeNumber=+response;
    const checkNumber= isNaN(maybeNumber);

    if (checkNumber==true) {
        console.log('Invalid number. Please enter a valid number.');
        enterNumber(promptText);
    }
    else {
        number=maybeNumber;
    }
    return number;
}

exports.performOneArithmeticCalculation = function() {
        
    console.log('Please enter operator:');
    const operator=readline.prompt();

    noOfInputs=enterNumber(`How many numbers do you want to ${operator}?`);

    var values=[];
    var i;
    for (i=0; i<noOfInputs; i++) {
    values[i]=enterNumber(`Please enter number ${i+1}`)
    }

    var answer=values[0];
    for (i=1; i<noOfInputs; i++) {
        if (operator == '+') {
            var answer = values.reduce(function(first, second) {return first + second;}, 0);
        }
        else if (operator == '-') {
            latterValues = values.slice(1);
            var answer = latterValues.reduce(function(first, second) {return first - second;}, values[0]);
        }
        else if (operator == '*') {
            var answer = values.reduce(function(first, second) {return first * second;}, 1);
        }
        else if (operator == '/') {
            latterValues = values.slice(1);
            var nonZeroValues = latterValues.filter(function(item) {return item!==0});
            var answer = nonZeroValues.reduce(function(first, second) {return first / second;}, values[0]);
        }
    }

    console.log(`The answer is ${answer}`);
}
