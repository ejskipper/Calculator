const readline = require('readline-sync');

function getOperator() {
    console.log('Please enter operator:');
    var operator=readline.prompt();
    try {
        if (operator=='+'||operator=='-'||operator=='/'||operator=='*') {
            return operator;
        }
        else {
            throw'Invalid Operator'
        }
    }
    catch (e) {
        console.log(`"${operator}" is not a valid operator. Please enter a valid operator. (+, -, * or /)`)
        operator=getOperator();
    }
    return operator;
}

operator=getOperator();
