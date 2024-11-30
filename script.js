let displayValue = '';
let firstNumber = '';
let operation = '';

document.getElementById('display').value = '';

document.querySelectorAll('.number-buttons button, .operation-buttons button, #clear-btn, #delete-btn, #equals-btn').forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        
        if (button.id === 'clear-btn') {
            displayValue = '';
            firstNumber = '';
            operation = '';
            document.getElementById('display').value = displayValue;
        } else if (button.id === 'delete-btn') {
            displayValue = displayValue.slice(0, -1);
            document.getElementById('display').value = displayValue;
        } else if (button.id === 'equals-btn') {
            let result;
            
            switch(operation) {
                case '+':
                    result = parseFloat(firstNumber) + parseFloat(displayValue);
                    break;
                case '-':
                    result = parseFloat(firstNumber) - parseFloat(displayValue);
                    break;
                case '*':
                    result = parseFloat(firstNumber) * parseFloat(displayValue);
                    break;
                case '/':
                    if (displayValue !== '0') {
                        result = parseFloat(firstNumber) / parseFloat(displayValue);
                    } else {
                        alert("Cannot divide by zero!");
                        return;
                    }
                    break;
            }
            
            displayValue = result.toString();
            firstNumber = '';
            operation = '';
            document.getElementById('display').value = displayValue;
        } else if (button.id === 'add-btn' || button.id === 'subtract-btn' || button.id === 'multiply-btn' || button.id === 'divide-btn') {
            firstNumber = displayValue;
            operation = value;
            displayValue = '';
            document.getElementById('display').value = displayValue;
        } else if (button.id === 'zero-btn' || button.id === 'one-btn' || button.id === 'two-btn' || button.id === 'three-btn' ||
                  button.id === 'four-btn' || button.id === 'five-btn' || button.id === 'six-btn' || button.id === 'seven-btn' ||
                  button.id === 'eight-btn' || button.id === 'nine-btn') {
            displayValue += value;
            document.getElementById('display').value = displayValue;
        } else if (button.id === 'decimal-btn') {
            if (!displayValue.includes('.')) {
                displayValue += '.';
                document.getElementById('display').value = displayValue;
            }
        }
    });
});
