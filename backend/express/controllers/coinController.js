const getCoin = (req, res) => {
  res.send(`getCoins handler for coin name: ${req.params.name}`);
};

module.exports = { getCoin };
