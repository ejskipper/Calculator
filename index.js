const readline = require('readline-sync');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

function printWelcomeMessage() {
console.log('Welcome to the calculator!\nPress ctrl + c to exit at any time.\n');
}

function chooseMode() {
    console.log(`Please select a calculator mode:
    1) Arithmetic
    2) Vowel Counting`)

    const modeSelection=readline.prompt();
    return modeSelection;
}

printWelcomeMessage();

while (true) {
    var calculationMode=chooseMode();
    if (calculationMode==1) {
        arithmetic.performOneArithmeticCalculation();
    }
    else if (calculationMode==2) {
        vowelCounting.performOneVowelCountingCalculation();
    }
}


