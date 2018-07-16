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
    }

    console.log(`The answer is ${answer}`);
}
