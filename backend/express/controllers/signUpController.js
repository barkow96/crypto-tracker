const {
  checkIfEmailCorrect,
  checkIfPasswordCorrect,
  checkIfPasswordsMatch,
} = require("../libs/validation");

const signUp = async (req, res) => {
  const submittedFormData = req.body;
  const { email, password1, password2 } = submittedFormData;
  console.log("Express.js - submitted form data: ", submittedFormData);

  //SERVER-SIDE DATA VALIDATION
  if (
    !email ||
    !checkIfEmailCorrect(email).test ||
    !password1 ||
    !checkIfPasswordCorrect(password1).test ||
    !password2 ||
    !checkIfPasswordsMatch(password1, password2).test
  ) {
    res.status(422).json({ message: "Incorrect format of signup data!" });
    return;
  }

  res
    .status(200)
    .json({ message: "Passing the data back", data: submittedFormData });
};

module.exports = { signUp };
