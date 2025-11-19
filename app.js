const display = document.querySelector(".calc-zero h4");

const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = null;

function updateDisplay(value) {
  display.textContent = value;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    // clear (C)
    if (value === "C") {
      currentInput = "";
      updateDisplay("0");
      console.log(`${value} clicked`);
      return;
    }

    // All clear (AC)
    if (value === "AC") {
      currentInput = "";
      previousInput = "";
      operator = null;
      updateDisplay("0");
      console.log(`${value} clicked`);
      return;
    }
    if (value === "+/-") {
      currentInput = String(Number(currentInput) * -1);
      updateDisplay(currentInput);
      return;
    }

    if (value === "%") {
      currentInput = String(Number(currentInput) / 100);
      updateDisplay(currentInput);
      console.log(`${value} clicked`);
      return;
    }

    // Operaters
    if (["+", "-", "X", "÷"].includes(value)) {
      operator = value;
      previousInput = currentInput;
      currentInput = "";
      console.log(`${value} clicked`);
      return;
    }

    if (value === ".") {
      if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay(currentInput);
        console.log(`${value} clicked`);
      }
      return;
    }

    if (value === "=") {
      if (previousInput && currentInput && operator) {
        let result = 0;
        const prev = Number(previousInput);
        const curr = Number(currentInput);

        switch (operator) {
          case "+":
            result = prev + curr;
            console.log(`${value} clicked`);
            break;

          case "-":
            result = prev - curr;
            console.log(`${value} clicked`);
            break;

          case "X":
            result = prev * curr;
            console.log(`${value} clicked`);
            break;

          case "÷":
            result = prev / curr;
            console.log(`${value} clicked`);
            break;
        }

        updateDisplay(result);
        currentInput = String(result);
        previousInput = "";
        operator = null;
      }

      return;
    }
    // Numbers
    if (!isNaN(value)) {
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});
