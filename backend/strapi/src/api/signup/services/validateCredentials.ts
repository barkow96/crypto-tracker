import {
  checkIfEmailCorrect,
  checkIfPasswordCorrect,
  checkIfPasswordsMatch,
} from "../libs/validation";

type ValidateCredentialsType = (
  email: string,
  password1: string,
  password2: string
) => boolean;

export const validateCredentials: ValidateCredentialsType = (
  email,
  password1,
  password2
) => {
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
};
