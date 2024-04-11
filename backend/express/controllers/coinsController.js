const { getCoinsList } = require("../services/getCoinsList");

const ERROR_MESSAGE = "Unsuccessful connection to data provider API";

const getCoins = async (req, res) => {
  let coinsList;
  try {
    coinsList = await getCoinsList();
  } catch (error) {
    res.status(500).json({
      message: ERROR_MESSAGE,
      error: error ? error : "Error message missing",
    });
    return;
  }

  res.status(200).json({ data: coinsList, metaData: { dataParts: 1 } });
};

module.exports = { getCoins };
