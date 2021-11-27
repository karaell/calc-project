result.innerHTML = 0;
let a = null;
let b = null;
let operator = null;
let selectedOperator = null;
let btnClear = document.getElementById("clear");
let btnDelete = document.getElementById("deletenum");
let btnNumber = document.querySelectorAll(".calc__btn--number");
let btnOperator = document.querySelectorAll(".calc__btn--operator");
let btnEqual = document.getElementById("equal");

function clearDisplay() {
  result.innerHTML = 0;
  a = null;
  b = null;
  operator = null;
}
btnClear.addEventListener('click', clearDisplay)

function deleteNumber() {
	let resultLength = result.innerHTML.length;

  if (resultLength === 1 ) {
     result.innerHTML = 0;
  } else {
    result.innerHTML = result.innerHTML.slice (0, resultLength - 1)
  }
}
btnDelete.addEventListener('click', deleteNumber);

for (let number of btnNumber) {
  number.onclick = function() {		
    if ( result.innerHTML != 0 && result.innerHTML != selectedOperator ) {
      result.innerHTML += number.innerHTML;
    } else { result.innerHTML = number.innerHTML; }
  }
}

for (let op of btnOperator) {
  op.onclick = function() {
    
    operator = op.id;
    
    switch (operator) {
    	case "div":
      selectedOperator = "÷";
      break;
      
      case "mult":
      selectedOperator = "*";
      break;
      
      case "sub":
      selectedOperator = "-";
      break;
      
      case "sum":
      selectedOperator = "+";
      break;
    }

    if (a === null) {
      a = result.innerHTML;
      result.innerHTML = selectedOperator;
    } else if (a !== null && b === null) {
      b = result.innerHTML;
    }

  }
}

btnEqual.onclick = function() {
  b = result.innerHTML;
  result.innerHTML = calc(a, b, operator);

  a = null;
  b = null;
  operator = null;
  selectedOperator = null;
}

function calc(a, b, operator) {
  switch (operator) {
    case "div":
      if (b === "0") {
        return "Error!";
      } else {
        return a / b;
      }
      break;

    case "mult":
      return a * b;
      break;

    case "sub":
      return a - b;
      break;

    case "sum":
      return +a + +b;
      break;
  }
}
