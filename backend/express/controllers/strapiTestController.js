require("dotenv").config();
const axios = require("axios");

const ERROR_MESSAGE = "Something went wrong with Strapi endpoint...";

const handleStrapiTest = async (req, res) => {
  let response;
  try {
    response = await axios(`${process.env.STRAPI_URL}/api/tests`);
  } catch (error) {
    res.status(500).json({
      message: ERROR_MESSAGE,
      error: error ? error : "Error message missing",
    });
  }

  if (response.status === 200) {
    res
      .status(200)
      .json({ message: "Strapi endpoint is working!", data: response.data });
  } else res.json({ error: "Response status is other than OK..." });
};

module.exports = { handleStrapiTest };
