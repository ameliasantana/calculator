var operandoa;
var operandob;
var operacion;



var result = document.getElementById('result');
var reset = document.getElementById('reset');
var sum = document.getElementById('sum');
var subtraction = document.getElementById('subtraction');
var multiplication = document.getElementById('multiplication');
var division = document.getElementById('division');
var iqual = document.getElementById('iqual');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');

one.click = function(e){
    result.textContent = result.textContent + "1";
}
two.click = function(e){
    result.textContent = result.textContent + "2";
}
three.click = function(e){
    result.textContent = result.textContent + "3";
}
four.click = function(e){
    result.textContent = result.textContent + "4";
}
five.click = function(e){
    result.textContent = result.textContent + "5";
}
six.click = function(e){
    result.textContent = result.textContent + "6";
}
seven.click = function(e){
    result.textContent = result.textContent + "7";
}
eigth.click = function(e){
    result.textContent = result.textContent + "8";
}
nine.click = function(e){
    result.textContent = result.textContent + "9";
}
zero.click = function(e){
    result.textContent = result.textContent + "0";
}

reset.onclick = function(e){
   reset();
}

suma.onclick = function(e){
    operandoa = result.textContent;
    operation = "+";
    clean();
}
subtraction.onclick = function(e){
    operandoa = result.textContent;
    operation = "-";
    clean();
}
multiplication.onclick = function(e){
    operandoa = result.textContent;
    operation = "*";
    clean();
}
division.onclick = function(e){
    operandoa = result.textContent;
    operation = "/";
    clean();
}
iqual.onclick = function(e){
    operandoa = result.textContent;
    resolver();
}
function limpiar(){
    result.textContent = "";
}
function reset(){
    result.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
        res= parseFloat(operandoa) + parseFloat(operandob);
        break;
        case "-":
        res= parseFloat(operandoa) - parseFloat(operandob);
        break;
        case "*":
        res= parseFloat(operandoa) * parseFloat(operandob);
        break;
        case "/":
        res= parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    reset();
    result.textContent = res;
}