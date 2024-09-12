const passwordBox = document.getElementById("password");
const passwordBox2 = document.getElementById("password2");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
  passwordBox.value = createPassword();
  passwordBox2.value = createPassword();
}

function createPassword() {
  const allChars = upperCase + lowerCase + numbers + specialCharacters;
  let password = "";
  const passwordLength = 12; // Define the desired length of the password
  for (let i = 0; i < passwordLength; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return password;
}

function copyPassword(inputId) {
  const password = document.getElementById(inputId);
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
