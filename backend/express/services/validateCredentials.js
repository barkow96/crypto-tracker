const {
  checkIfEmailCorrect,
  checkIfPasswordCorrect,
  checkIfPasswordsMatch,
} = require("../libs/validation");

function validateCredentials(email, password1, password2) {
  if (
    !email ||
    !checkIfEmailCorrect(email).test ||
    !password1 ||
    !checkIfPasswordCorrect(password1).test ||
    !password2 ||
    !checkIfPasswordsMatch(password1, password2).test
  )
    return false;
  else return true;
}

module.exports = { validateCredentials };
