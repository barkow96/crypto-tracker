const bcrypt = require("bcryptjs");

type HashPasswordType = (password: string) => Promise<string>;
type VerifyPasswordType = (
  password: string,
  hashedPassword: string
) => Promise<boolean>;

export const hashPassword: HashPasswordType = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};

export const verifyPassword: VerifyPasswordType = async (
  password,
  hashedPassword
) => {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
};
