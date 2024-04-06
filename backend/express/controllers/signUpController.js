const {
  checkIfEmailCorrect,
  checkIfPasswordCorrect,
  checkIfPasswordsMatch,
} = require("../libs/validation");

const ERROR_MESSAGE = "Something went wrong with Strapi endpoint...";

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

  //TRYING TO SEND THE CREDENTIALS TO POSTGRESQL
  const newUser = {
    data: { email: email, password: password1 },
  };

  let response;
  try {
    response = await fetch(`${process.env.STRAPI_URL}/api/website-users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    res.status(201).json({ message: "User has been created!" });
  } catch (error) {
    res.status(500).json({
      message: ERROR_MESSAGE,
      error: error ? error : "Error message missing",
    });
    return;
  }
};

module.exports = { signUp };
