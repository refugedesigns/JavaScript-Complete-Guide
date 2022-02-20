const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  const enteredNumber = +userInput.value;
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
