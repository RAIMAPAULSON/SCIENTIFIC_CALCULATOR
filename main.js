// display content in calcScreen
const displayContent = (content) => {
    calcScreen.value += content
}
// clear content of calcScreen
const clearAllContent = () => {
    calcScreen.value = ""
    calcScreen.placeholder = "0"
}
// result display in calcScreen
const displayResult = () => {
    calcScreen = document.getElementById("calcScreen");
    let expression = calcScreen.value;
    let result;

    try {
        // Convert trigonometric function inputs from degrees to radians
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');

        result = math.evaluate(expression);
        calcScreen.value = result;
    } catch (error) {
        calcScreen.value = "Invalid expression";
    }
}


// remove last
const removeLast = () => {
    calcScreen.value = calcScreen.value.slice(0, -1)
}

const sinFunction = () => {
    const currentValue = parseFloat(calcScreen.value);
    if (!isNaN(currentValue)) {
        calcScreen.value = Math.sin(currentValue * (Math.PI / 180)); // Convert degrees to radians
    } else {
        calcScreen.value = "";
        calcScreen.placeholder = "Invalid input for sin!";
    }
}

function squareRoot() {
    let calcScreen = document.getElementById("calcScreen");
    calcScreen.value += "sqrt(";
}

function base10Log() {
    let calcScreen = document.getElementById("calcScreen");
    calcScreen.value += "log(";
}

function pi() {
    let calcScreen = document.getElementById("calcScreen");
    calcScreen.value += "pi";
}

function e() {
    let calcScreen = document.getElementById("calcScreen");
    calcScreen.value += "e";
}

function power() {
    let calcScreen = document.getElementById("calcScreen");
    calcScreen.value += "^(";
}