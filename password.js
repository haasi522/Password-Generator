const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate");

const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numbersChars = "0123456789";
const symbolsChars = "!@#$%^&*()_-+=<>?/{}[]|";

function generatePassword() {
    let length = lengthInput.value;
    let charset = "";

    if (uppercaseCheckbox.checked) charset += uppercaseChars;
    if (lowercaseCheckbox.checked) charset += lowercaseChars;
    if (numbersCheckbox.checked) charset += numbersChars;
    if (symbolsCheckbox.checked) charset += symbolsChars;

    if (charset.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }

    passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});

// Generate a default password on load
generatePassword();
