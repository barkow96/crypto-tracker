import { HomeTableItemdata } from "@/types/home-table/item";

export const exampleCoins: HomeTableItemdata[] = [
  {
    rank: 1,
    symbol: "BTC",
    price: 64500,
    priceChange24H: -15,
    volume24H: 1000000,
    lowPrice24H: 500,
    highPrice24H: 1000,
    reference: "USDT",
  },
  {
    rank: 2,
    symbol: "ETH",
    price: 3500,
    priceChange24H: -12,
    volume24H: 750000,
    lowPrice24H: 5500,
    highPrice24H: 12000,
    reference: "USDT",
  },
  {
    rank: 3,
    symbol: "SOL",
    price: 200,
    priceChange24H: 2,
    volume24H: 432,
    lowPrice24H: 12,
    highPrice24H: 300,
    reference: "USDT",
  },
];
