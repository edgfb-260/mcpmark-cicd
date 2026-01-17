// src/example.js - fixed linting errors
const usedVariable = 'this variable is used';
console.log('This string uses single quotes and has a semicolon');
function hasSemicolon() {
  return 'has a semicolon here';
}

// Use the variable to resolve no-unused-vars error
console.log(usedVariable);