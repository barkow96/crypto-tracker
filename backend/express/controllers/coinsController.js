const axios = require("axios");
const { getCoinsList } = require("../services/getCoinsList");

const getCoins = async (req, res) => {
  try {
    const data = await getCoinsList();
    res.json(data);
  } catch (error) {
    console.error(
      "There was an error during fetching data from Binance API:",
      error
    );
    res.status(500).json({
      message: "There was an error during fetching data from Binance API",
      error: error,
    });
  }
};

module.exports = { getCoins };
