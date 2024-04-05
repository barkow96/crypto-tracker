const axios = require("axios");

const handleStrapiTest = async (req, res) => {
  const response = await axios("http://localhost:1337/api/tests");

  if (response.status === 200) {
    res
      .status(200)
      .json({ message: "Strapi endpoint is working!", data: response.data });
  } else
    res
      .status(500)
      .json({ error: "Something went wrong with Strapi endpoint..." });
};

module.exports = { handleStrapiTest };
