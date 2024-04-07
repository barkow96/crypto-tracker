async function insertNewUser(email, password) {
  const newUser = {
    data: { email: email, password: password },
  };

  await fetch(`${process.env.STRAPI_URL}/api/website-users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
}

module.exports = { insertNewUser };
