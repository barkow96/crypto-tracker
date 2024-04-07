const { checkIfUserExists } = require("../services/checkIfUserExists");
const { insertNewUser } = require("../services/insertNewUser");
const { validateCredentials } = require("../services/validateCredentials");

const ERROR_MESSAGE = "Something went wrong with Strapi endpoint...";

const signUp = async (req, res) => {
  const { email, password1, password2 } = req.body;

  //SERVER-SIDE DATA VALIDATION
  if (!validateCredentials(email, password1, password2)) {
    res.status(422).json({ message: "Incorrect format of signup data!" });
    return;
  }

  //CHECKING IF USER ALREADY EXISTS
  if (await checkIfUserExists(email)) {
    res.status(403).json({ message: "This email is already in use!" });
    return;
  }

  //TRYING TO SEND THE CREDENTIALS TO POSTGRESQL
  try {
    await insertNewUser(email, password1);
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
