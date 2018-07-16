const readline = require('readline-sync');

function displayVowelCount(object) {
    console.log(`\nThe vowel counts are:
    A:${object.A}
    E:${object.E}
    I:${object.I}
    O:${object.O}
    U:${object.U}`)
}



exports.performOneVowelCountingCalculation=function() {
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