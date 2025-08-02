function calculate() {
    let num1 = Number(document.getElementById('num1').value);
 
    let op = selectedOperator; 
    let num2 = Number(document.getElementById('num2').value);
    let res;

   
    if (isNaN(num1) || isNaN(num2) || !op) {
        document.getElementById('result').value = 'Not a valid input';
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
            document.getElementById('result').value = 'Cannot divide by zero';
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
}


document.getElementById('calculateBtn').addEventListener('click', calculate);


document.getElementById('num1').addEventListener('input', () => {
    document.getElementById('result').value = '';
});

document.getElementById('num2').addEventListener('input', () => {
    document.getElementById('result').value = '';
});