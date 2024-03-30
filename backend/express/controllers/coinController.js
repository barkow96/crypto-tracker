const { get24HoursData } = require("../services/get24HoursData");
const { getIntervalData } = require("../services/getIntervalData");

const ERROR_MESSAGE = "Unsuccessful connection to data provider API";

const getCoin = async (req, res) => {
  const name = req.params.name;

  let coinData;
  try {
    // coinData = await getIntervalData("1w", name);
    coinData = await get24HoursData(name);
  } catch (error) {
    console.error(ERROR_MESSAGE, error);
    res.status(500).json({
      message: ERROR_MESSAGE,
      error: error,
    });
  }

  res.status(200).json(coinData);
};

module.exports = { getCoin };
