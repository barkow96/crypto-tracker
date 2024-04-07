const {
  checkIfEmailCorrect,
  checkIfPasswordCorrect,
  checkIfPasswordsMatch,
} = require("../libs/validation");

const ERROR_MESSAGE = "Something went wrong with Strapi endpoint...";

const signUp = async (req, res) => {
  const { email, password1, password2 } = req.body;

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

  //CHECKING IF USER ALREADY EXISTS
  const existingUsersResponse = await fetch(
    `${process.env.STRAPI_URL}/api/website-users`
  );
  const existingUsers = await existingUsersResponse.json();

  const userAlreadyExists = existingUsers.data.some(
    (obj) => obj.attributes.email === email
  );

  if (userAlreadyExists) {
    res.status(403).json({ message: "This email is already in use!" });
    return;
  }

  //TRYING TO SEND THE CREDENTIALS TO POSTGRESQL
  const newUser = {
    data: { email: email, password: password1 },
  };

  let insertNewUserResponse;
  try {
    insertNewUserResponse = await fetch(
      `${process.env.STRAPI_URL}/api/website-users`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }
    );
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
