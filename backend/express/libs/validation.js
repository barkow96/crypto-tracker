const emptyMessage = "Input cannot remain empty!";

const checkIfEmailCorrect = (text) => {
  const test = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(text);
  let message = test ? "" : "Invalid format of email address!";
  message = text.trim().length === 0 ? emptyMessage : message;
  return { test, message };
};

const checkIfPasswordCorrect = (text) => {
  const test = text.trim().length >= 6;
  let message = test ? "" : "Password is too short!";
  message = text.trim().length === 0 ? emptyMessage : message;
  return { test, message };
};

const checkIfPasswordsMatch = (text1, text2) => {
  const test = text1.trim() === text2.trim();
  let message = test ? "" : "Passwords are not exactly the same!";
  message =
    text1.trim().length === 0 || text2.trim().length === 0
      ? emptyMessage
      : message;
  return { test, message };
};

module.exports = {
  checkIfEmailCorrect,
  checkIfPasswordCorrect,
  checkIfPasswordsMatch,
};
