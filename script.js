const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDisplay = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    if (textInput.value.length === 0) {
        alert('Please input a value');
        return;
    };
    const sanitizeInput = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    const validatePalindrome = sanitizeInput.split("").reverse().join("");

    if (sanitizeInput !== validatePalindrome) {
        resultDisplay.textContent = `${sanitizeInput} is not a palindrome`;
    } else {
        resultDisplay.textContent = `${sanitizeInput} is a palindrome`;

    }
})

