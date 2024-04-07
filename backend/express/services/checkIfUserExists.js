async function checkIfUserExists(email) {
  const existingUsersResponse = await fetch(
    `${process.env.STRAPI_URL}/api/website-users`
  );
  const existingUsers = await existingUsersResponse.json();

  const userAlreadyExists = existingUsers.data.some(
    (obj) => obj.attributes.email === email
  );

  return userAlreadyExists;
}

module.exports = { checkIfUserExists };
