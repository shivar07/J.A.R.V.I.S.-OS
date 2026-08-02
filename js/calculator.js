/**
 * J.A.R.V.I.S. OS Calculator Subsystem
 * Developed by shivar07
 */

function initCalculator() {
  const formulaEl = document.getElementById("calc-formula");
  const displayEl = document.getElementById("calc-display");
  const calculatorWin = document.getElementById("win-calculator");
  
  if (!formulaEl || !displayEl || !calculatorWin) return;
  
  let currentInput = "0";
  let storedInput = null;
  let currentOperator = null;
  let shouldResetDisplay = false;
  let hasEvaluated = false;

  function updateScreen() {
    displayEl.textContent = currentInput;
    if (currentOperator !== null && storedInput !== null) {
      let opSymbol = currentOperator;
      if (opSymbol === "*") opSymbol = "×";
      if (opSymbol === "/") opSymbol = "÷";
      formulaEl.textContent = `${storedInput} ${opSymbol}`;
    } else {
      formulaEl.textContent = "";
    }
  }

  function clearAll() {
    currentInput = "0";
    storedInput = null;
    currentOperator = null;
    shouldResetDisplay = false;
    hasEvaluated = false;
    updateScreen();
  }

  function clearEntry() {
    currentInput = "0";
    updateScreen();
  }

  function handleDigit(digit) {
    if (hasEvaluated || shouldResetDisplay) {
      currentInput = digit;
      shouldResetDisplay = false;
      hasEvaluated = false;
    } else {
      if (currentInput === "0") {
        currentInput = digit;
      } else {
        if (currentInput.length < 12) {
          currentInput += digit;
        }
      }
    }
    updateScreen();
  }

  function handleDecimal() {
    if (hasEvaluated || shouldResetDisplay) {
      currentInput = "0.";
      shouldResetDisplay = false;
      hasEvaluated = false;
    } else {
      if (!currentInput.includes(".")) {
        if (currentInput.length < 12) {
          currentInput += ".";
        }
      }
    }
    updateScreen();
  }

  function handleBackspace() {
    if (hasEvaluated) return;
    if (currentInput.length > 1) {
      currentInput = currentInput.slice(0, -1);
    } else {
      currentInput = "0";
    }
    updateScreen();
  }

  function handleNegate() {
    if (currentInput === "0" || currentInput === "Error") return;
    if (currentInput.startsWith("-")) {
      currentInput = currentInput.substring(1);
    } else {
      currentInput = "-" + currentInput;
    }
    updateScreen();
  }

  function calculate(a, b, op) {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return b === 0 ? "Error" : a / b;
      default: return b;
    }
  }

  function formatResult(value) {
    if (value === "Error") return "Error";
    if (isNaN(value) || !isFinite(value)) return "Error";
    
    let strVal = value.toString();
    if (strVal.length <= 12) return strVal;
    
    let rounded = parseFloat(value.toFixed(8));
    if (rounded.toString().length <= 12) return rounded.toString();
    
    let expVal = value.toExponential(6);
    if (expVal.length <= 12) return expVal;
    
    return strVal.substring(0, 12);
  }

  function handleOperator(op) {
    const value = parseFloat(currentInput);
    if (isNaN(value)) return;

    if (storedInput === null) {
      storedInput = value;
    } else if (!shouldResetDisplay && currentOperator) {
      const result = calculate(storedInput, value, currentOperator);
      if (result === "Error") {
        clearAll();
        currentInput = "Error";
        updateScreen();
        return;
      }
      storedInput = result;
      currentInput = formatResult(result);
    }
    
    currentOperator = op;
    shouldResetDisplay = true;
    hasEvaluated = false;
    updateScreen();
  }

  function handleEquals() {
    if (currentOperator === null || storedInput === null || shouldResetDisplay) return;
    const value = parseFloat(currentInput);
    if (isNaN(value)) return;

    const result = calculate(storedInput, value, currentOperator);
    if (result === "Error") {
      clearAll();
      currentInput = "Error";
      updateScreen();
      return;
    }

    let opSymbol = currentOperator;
    if (opSymbol === "*") opSymbol = "×";
    if (opSymbol === "/") opSymbol = "÷";
    
    formulaEl.textContent = `${storedInput} ${opSymbol} ${value} =`;
    currentInput = formatResult(result);
    storedInput = null;
    currentOperator = null;
    shouldResetDisplay = false;
    hasEvaluated = true;
    
    displayEl.textContent = currentInput;
  }

  function handleAction(val) {
    if (val >= "0" && val <= "9") {
      handleDigit(val);
      if (typeof synthSound === "function") synthSound("click");
    } else if (val === ".") {
      handleDecimal();
      if (typeof synthSound === "function") synthSound("click");
    } else if (val === "C") {
      clearAll();
      if (typeof synthSound === "function") synthSound("click");
    } else if (val === "CE") {
      clearEntry();
      if (typeof synthSound === "function") synthSound("click");
    } else if (val === "backspace") {
      handleBackspace();
      if (typeof synthSound === "function") synthSound("click");
    } else if (val === "negate") {
      handleNegate();
      if (typeof synthSound === "function") synthSound("click");
    } else if (["+", "-", "*", "/"].includes(val)) {
      handleOperator(val);
      if (typeof synthSound === "function") synthSound("click");
    } else if (val === "=") {
      handleEquals();
      if (typeof synthSound === "function") synthSound("success");
    }
  }

  // Click handlers
  const buttons = calculatorWin.querySelectorAll(".calc-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-val");
      handleAction(val);
    });
  });

  // Keyboard support
  window.addEventListener("keydown", (e) => {
    if (calculatorWin.style.display !== "flex") return;
    if (!calculatorWin.classList.contains("active-window")) return;

    const key = e.key;

    if (key >= "0" && key <= "9") {
      e.preventDefault();
      handleAction(key);
    } else if (key === ".") {
      e.preventDefault();
      handleAction(".");
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      e.preventDefault();
      handleAction(key);
    } else if (key.toLowerCase() === "x") {
      e.preventDefault();
      handleAction("*");
    } else if (key === "Enter" || key === "=") {
      e.preventDefault();
      handleAction("=");
    } else if (key === "Backspace") {
      e.preventDefault();
      handleAction("backspace");
    } else if (key === "Escape") {
      e.preventDefault();
      handleAction("C");
    } else if (key.toLowerCase() === "c") {
      e.preventDefault();
      handleAction("CE");
    }
  });
}
