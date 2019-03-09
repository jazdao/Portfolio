/*
CASES:
*1. operand -> operator -> operand -> equal -> display answer
*2. (operand -> operator -> operand) -> operator -> within parentheses = operandOne
*3. one operator after another -> replace previous operator
*4. one operator after equal sign -> operandOne = prevAnswer
*6. two decimals in a row -> countermeasure
*7. operator then equal -> ERROR
*8. consecutive 0s -> display only one unless after decimal
*/

var screenText = "";
var operator = "";
var previous = "";
var operandOne = 0;
var operandTwo = 0;
var changedOne = false;
var changedTwo = false;
var displayScreen = document.getElementById("screen");

function display(id) {
	if (previous === "operator" || screenText === "0") {
		screenText = "";
	}
	else if (previous === "equal") {
		clear();
	}

	switch (id) {
		case "zero":
			if (screenText != "0")
				screenText += "0";
			break;
		case "one":
			screenText += "1";
			break;
		case "two":
			screenText += "2";
			break;
		case "three":
			screenText += "3";
			break;
		case "four":
			screenText += "4";
			break;
		case "five":
			screenText += "5";
			break;
		case "six":
			screenText += "6";
			break;
		case "seven":
			screenText += "7";
			break;
		case "eight":
			screenText += "8";
			break;
		case "nine":
			screenText += "9";
			break;
		case "decimal":
			if (screenText.indexOf(".") === -1) {
				if (screenText === "" || screenText === "0")
					screenText = "0.";
				else
					screenText += ".";
			}
			break;
	}

	if (id === "c") {
		clear();
		screenText = "0";
	}
	else {
		previous = "operand";
	}

	displayScreen.innerHTML = screenText;
}


function calculate(id) {
	operator = id;

	if (!changedOne) {
		operandOne = parseFloat(displayScreen.innerHTML);
		changedOne = true;
	}
	else if (!changedTwo && previous != "operator" && previous != "equal") {
		operandTwo = parseFloat(displayScreen.innerHTML);
		changedTwo = true;
	}

	if (changedTwo) {
		returnCalculation(operator);
	}

	previous = "operator";
}

function equal() {
	if (previous === "operator") {
		displayScreen.innerHTML = "ERROR: Invalid Expression";
		clear();
	}
	else if (previous === "equal") {
		displayScreen.innerHTML = operandOne;
	}
	else {
		if (!changedOne) {
			operandOne = parseFloat(displayScreen.innerHTML);
			changedOne = true;
		}
		else if (!changedTwo) {
			operandTwo = parseFloat(displayScreen.innerHTML);
			changedTwo = true;
		}
		returnCalculation(operator);
		previous = "equal";
	}
}

function returnCalculation(id) {
	switch (id) {
		case "plus":
			operandOne = operandOne + operandTwo;
			break;
		case "minus":
			operandOne = operandOne - operandTwo;
			break;
		case "multiply":
			operandOne = operandOne * operandTwo;
			break;
		case "divide":
			if (operandTwo === 0) {
				displayScreen.innerHTML = "ERROR: Divide by 0";
				clear();
				return;
			}
			else {
				operandOne = operandOne / operandTwo;
				break;
			}
	}
	changedOne = true;
	changedTwo = false;
	displayScreen.innerHTML = operandOne;
}

function clear() {
	operandOne = 0;
	operandTwo = 0;
	screenText = "";
	previous = "";
	changedOne = false;
	changedTwo = false;
}