const readline = require('readline-sync');

function chooseMode() {
    console.log(`Please select a calculator mode:
    1) Arithmetic
    2) Vowel Counting`)

    const modeSelection=readline.prompt();
    return modeSelection;
}

const modeSelection=chooseMode();
console.log(modeSelection);