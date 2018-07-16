const readline = require('readline-sync');

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

function displayVowelCount(object) {
    console.log(`\nThe vowel counts are:
    A:${object.A}
    E:${object.E}
    I:${object.I}
    O:${object.O}
    U:${object.U}`)
}

function performOneVowelCountingCalculation() {
    console.log('Please enter text for vowel counting:');
    const inputText=readline.prompt();
    const inputLength=inputText.length;

    var vowelCount = new Object();
    vowelCount.A=0;
    vowelCount.E=0;
    vowelCount.I=0;
    vowelCount.O=0;
    vowelCount.U=0;

    for (var i=0; i<inputLength; i++) {
        if ((inputText[i]=='a')||(inputText[i]=='A')) {
            vowelCount.A+=1;
        }
        else if ((inputText[i]=='e')||(inputText[i]=='E')) {
            vowelCount.E+=1;
        }
        else if ((inputText[i]=='i')||(inputText[i]=='I')) {
            vowelCount.I+=1;
        }
        else if ((inputText[i]=='o')||(inputText[i]=='O')) {
            vowelCount.O+=1;
        }
        else if ((inputText[i]=='u')||(inputText[i]=='U')) {
            vowelCount.U+=1;
        }
    }
displayVowelCount(vowelCount);
}

function performOneArithmeticCalculation() {
        
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

printWelcomeMessage();

while (true) {
    var calculationMode=chooseMode();
    if (calculationMode==1) {
        performOneArithmeticCalculation();
    }
    else if (calculationMode==2) {
        performOneVowelCountingCalculation();
    }
}


