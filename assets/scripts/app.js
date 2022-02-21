const defaultValue = 0;
let currentResult = defaultValue;
const logEntries = [];

function getUserInputNum() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, initialResult, currentNum) {
  const calcDescription = `${initialResult} ${operator} ${currentNum}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(opIdentifier, prevResult, opNumber, newResult) {
  const logEntry = {
    opIdentifier,
    prevResult,
    opNumber,
    newResult,
  };
  logEntries.push(logEntry);
}

function add() {
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("x", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInputNum();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
addBtn.addEventListener("click", add);
