window.onload = function() {
    document.getElementById("button1").onclick = function() { addToDisplay(1); };
    document.getElementById("button2").onclick = function() { addToDisplay(2); };
    document.getElementById("button3").onclick = function() { addToDisplay(3); };
    document.getElementById("button4").onclick = function() { addToDisplay(4); };
    document.getElementById("button5").onclick = function() { addToDisplay(5); };
    document.getElementById("button6").onclick = function() { addToDisplay(6); };
    document.getElementById("button7").onclick = function() { addToDisplay(7); };
    document.getElementById("button8").onclick = function() { addToDisplay(8); };
    document.getElementById("button9").onclick = function() { addToDisplay(9); };
    document.getElementById("button0").onclick = function() { addToDisplay(0); };
    document.getElementById("buttonAdd").onclick = function() { addToDisplay('+'); };
    document.getElementById("buttonSubtract").onclick = function() { addToDisplay('-'); };
    document.getElementById("buttonMultiply").onclick = function() { addToDisplay('*'); };
    document.getElementById("buttonDivide").onclick = function() { addToDisplay('/'); };
    document.getElementById("buttonDot").onclick = function() { addToDisplay('.'); };
    document.getElementById("buttonClear").onclick = clearDisplay;
    document.getElementById("buttonEqual").onclick = calculate;
};
last = '+';
function addToDisplay(value) {
    if (!(['*','/','-', '+','.'].includes(last))){
        document.getElementById('display').value += value;
        last = value;
    }
    else if(['*','/','-', '+','.'].includes(last) && Number.isInteger(value)){
        document.getElementById('display').value += value;
        last = value;
        
}
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue);
    document.getElementById('display').value = result;
    last = '+';
}

function clearDisplay() {
    document.getElementById('display').value = '';
    last = '+';
}