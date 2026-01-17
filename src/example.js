// src/example.js - intentional linting errors
let unusedVariable = "this variable is never used"; // violates no-unused-vars (error)
console.log("This string uses double quotes, which is not allowed"); // violates quotes (error)
function missingSemicolon() {
  return "no semicolon here" // violates semi (error)
}