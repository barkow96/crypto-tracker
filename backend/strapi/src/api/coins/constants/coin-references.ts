// DEFINING PRICE RELATIVE TO USD OF REFERENCE PAIRS
export const searchedReferencePairs: ReferencePairsType = [
  { pair: "BTCUSDT", price: null, of: "BTC", to: "USDT" },
  { pair: "ETHUSDT", price: null, of: "ETH", to: "USDT" },
  { pair: "BNBUSDT", price: null, of: "BNB", to: "USDT" },
  { pair: "TRXUSDT", price: null, of: "TRX", to: "USDT" },
  { pair: "XRPUSDT", price: null, of: "XRP", to: "USDT" },
  { pair: "EURUSDT", price: null, of: "EUR", to: "USD" },
  { pair: "USDTTRY", price: null, of: "TRY", to: "USDT", reversedPair: true },
  { pair: "USDTZAR", price: null, of: "ZAR", to: "USDT", reversedPair: true },
  { pair: "USDTDAI", price: null, of: "DAI", to: "USDT", reversedPair: true },
  {
    pair: "USDTBIDR",
    price: null,
    of: "BIDR",
    to: "USDT",
    reversedPair: true,
  },
];

// DEFINING STABLE COINS REFERENCES
export const stableCoinsReferences: StableCoinReferenceType = [
  "USDT",
  "USDC",
  "FDUSD",
  "USD",
  "TUSD",
];
