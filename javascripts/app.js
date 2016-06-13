var firstNum = "";
var secondNum = "";
var operator = "";
var result = 0;

function clearInput() {
	firstNum = "";
	secondNum = "";
	operator = "";
	result = 0;
	display.innerHTML = result;
}

function inputNumber(num) {
	if(operator === "") {
		display = document.getElementById("display");
		firstNum += num;
		display.innerHTML = firstNum
	}
	else {
		secondNum += num;
		display = document.getElementById("display");
		display.innerHTML = secondNum
	}
}

function runOperation(command) {
	if(result != "") {
		firstNum = result;
		secondNum = "";
		operator = command;
		display = document.getElementById("display");
		display.innerHTML = operator
	}
	else {
		operator = command;
		display = document.getElementById("display");
		display.innerHTML = operator
	}
}

function calculate() {
	switch(operator) {
  	case '+':
      result = parseInt(firstNum) + parseInt(secondNum);
      break;
  	case '-':
      result = parseInt(firstNum) - parseInt(secondNum);
      break;
  	case '*':
      result = parseInt(firstNum) * parseInt(secondNum);
      break;
  	case '/':
      result = parseInt(firstNum) / parseInt(secondNum);
      break;
  	default:
    	result = 'Not a valid operator';
	}
	display.innerHTML = result
}