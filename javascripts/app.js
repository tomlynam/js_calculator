var firstNum = "";
var secondNum = "";
var operator = "";
var result = 0;

function inputNumber(num) {
	if(operator === "") {
		var display = document.getElementById("display");
		firstNum += num;
		display.innerHTML = firstNum
		console.log(firstNum);
	}
	else {
		secondNum += num;
		console.log(secondNum);
	}
}

function runOperation(command) {
	if(result != "") {
		firstNum = result;
		secondNum = "";
		operator = command;
		console.log(firstNum);
	}
	else {
		operator = command;
	}
	console.log(operator);
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
	console.log(result);
}