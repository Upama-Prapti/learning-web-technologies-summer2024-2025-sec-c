
let selectedOperator;


document.getElementById('plus').addEventListener('click', function() {
    selectedOperator = '+';
});

document.getElementById('minus').addEventListener('click', function() {
    selectedOperator = '-';
});

document.getElementById('multiplication').addEventListener('click', function() {
    selectedOperator = '*';
});

document.getElementById('division').addEventListener('click', function() {
    selectedOperator = '/';
});

document.getElementById('percentage').addEventListener('click', function() {
    selectedOperator = '%';
});



function calculate() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let op = selectedOperator; 
    let res;

   
    if (isNaN(num1) || isNaN(num2) || !op) {
        document.getElementById('result').value = 'Invalid Input';
        return;
    }

    if (op == '+') {
        res = num1 + num2;
    } else if (op == '-') {
        res = num1 - num2;
    } else if (op == '*') {
        res = num1 * num2;
    } else if (op == '/') {
        if (num2 === 0) {
            document.getElementById('result').value = 'Cannot divide by 0';
            return;
        }
        res = num1 / num2;
    } else if (op == '%') {
        if (num2 === 0) {
            document.getElementById('result').value = 'Invalid operation';
            return;
        }
        res = num1 % num2;
    } else {
        document.getElementById('result').value = 'Invalid operator';
        return;
    }

    document.getElementById('result').value = res;
}


function gayeb() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
    selectedOperator = null;
}


document.getElementById('calculateBtn').addEventListener('click', calculate);

document.getElementById('clean').addEventListener('click', gayeb);


document.getElementById('num1').addEventListener('input', () => {
    document.getElementById('result').value = '';
});

document.getElementById('num2').addEventListener('input', () => {
    document.getElementById('result').value = '';
});
