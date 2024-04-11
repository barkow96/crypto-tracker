type CoinsListType = {
  rank: number;
  symbol: string;
  price: number;
  priceChange24H: number;
  volume24H: number;
  lowPrice24H: number;
  highPrice24H: number;
  reference: string;
}[];

type ReferencePairsType = {
  pair: string;
  price: number | null;
  of: string;
  to: string;
  reversedPair?: boolean;
}[];

type StableCoinReferenceType = string[];

type ExtEndpoint_Ticker24hr_Type = {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lasyQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}[];

type Ticker24hr_DataPostProcessing1_Type = {
  symbol: string;
  price: number;
  priceChange24H: number;
  volume24H: number;
  lowPrice24H: number;
  highPrice24H: number;
}[];

type Ticker24hr_DataPostProcessing2_Type = {
  symbol: string;
  price: number;
  priceChange24H: number;
  volume24H: number;
  lowPrice24H: number;
  highPrice24H: number;
  reference: string;
}[];

type Ticker24hr_DataPostProcessing3_Type = {
  rank: number;
  symbol: string;
  price: number;
  priceChange24H: number;
  volume24H: number;
  lowPrice24H: number;
  highPrice24H: number;
  reference: string;
}[];

type DataProcess1_Type = (
  coinsData: ExtEndpoint_Ticker24hr_Type
) => Ticker24hr_DataPostProcessing1_Type;

type DataProcess2_Type = (
  coins: Ticker24hr_DataPostProcessing1_Type,
  stableCoinsReferences: StableCoinReferenceType,
  referencePairs: ReferencePairsType
) => Ticker24hr_DataPostProcessing2_Type;

type DataProcess3_Type = (
  coins: Ticker24hr_DataPostProcessing2_Type,
  stableCoinsReferences: StableCoinReferenceType
) => Ticker24hr_DataPostProcessing3_Type;

type FillReferencePricesType = (
  referencePairs: ReferencePairsType,
  coins: Ticker24hr_DataPostProcessing1_Type
) => ReferencePairsType;
