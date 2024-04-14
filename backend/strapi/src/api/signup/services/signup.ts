import { checkIfUserExists } from "./checkIfUserExists";
import { insertNewUser } from "./insertNewUser";
import { validateCredentials } from "./validateCredentials";

export default () => ({
  validateCredentials: (email, password1, password2) =>
    validateCredentials(email, password1, password2),
  checkIfUserExists: async (email) => checkIfUserExists(email),
  insertNewUser: async (email, password) => {
    insertNewUser(email, password);
  },
});
