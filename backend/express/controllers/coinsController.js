const axios = require("axios");
const { getCoinsList } = require("../services/getCoinsList");

const DATA_RECORDS_PER_REQUEST = 10;
const ERROR_MESSAGE = "Unsuccessful connection to data provider API";

const getCoins = async (req, res) => {
  const part = parseInt(req.params.part);

  let coinsList;
  try {
    coinsList = await getCoinsList();
  } catch (error) {
    console.error(ERROR_MESSAGE, error);
    res.status(500).json({
      message: ERROR_MESSAGE,
      error: error ? error : "Error data missing",
    });
  }

  const partialCoinsList = coinsList.slice(
    DATA_RECORDS_PER_REQUEST * part,
    DATA_RECORDS_PER_REQUEST * (part + 1)
  );

  res.status(200).json(partialCoinsList);
};

module.exports = { getCoins };
