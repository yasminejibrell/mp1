
function addition() {
    const num1 = Number(document.getElementById('first-number').value);
    const num2 = Number(document.getElementById('second-number').value);
    const result = num1 + num2;
    displayResult(result);
}

function subtraction() {
    const num1 = Number(document.getElementById('first-number').value);
    const num2 = Number(document.getElementById('second-number').value);
    const result = num1 - num2;
    displayResult(result);
}

function multiplication() {
    const num1 = Number(document.getElementById('first-number').value);
    const num2 = Number(document.getElementById('second-number').value);
    const result = num1 * num2;
    displayResult(result);
}

function division() {
    const num1 = Number(document.getElementById('first-number').value);
    const num2 = Number(document.getElementById('second-number').value);
    const result = num1 / num2;
    displayResult(result);
}

function power() {
    const base = Number(document.getElementById('first-number').value);
    const exponent = Number(document.getElementById('second-number').value);
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    displayResult(result);
}

function clearCalc() {
    document.getElementById('first-number').value = '';
    document.getElementById('second-number').value = '';
    document.getElementById('output').innerHTML = '';
}

function displayResult(result) {
    const output = document.getElementById('output');
    output.innerHTML = String(result);
    output.style.color = result < 0 ? 'red' : 'darkblue';
    output.style.fontSize = calc('500px + 5vw');
}
