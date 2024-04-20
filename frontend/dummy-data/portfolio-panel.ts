import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import {
  PortfolioCoin,
  PortfolioTransaction,
} from "@/types/portfolio-panel/portfolio-table";

export const initialPortfolioList: Portfolio[] = [
  {
    id: 1,
    name: "My first portfolio",
    value: 1699,
    icon: "StarIcon",
    isActive: true,
    coins: ["BTC", "ETH"],
  },
  {
    id: 2,
    name: "My second portfolio",
    value: 1299,
    icon: "MoonIcon",
    isActive: false,
    coins: ["SOL"],
  },
  {
    id: 3,
    name: "My third portfolio",
    value: 520,
    icon: "SunIcon",
    isActive: false,
    coins: ["INJ", "RNDR"],
  },
  {
    id: 4,
    name: "My fourth portfolio",
    value: 50,
    icon: "SunIcon",
    isActive: false,
    coins: ["XAI"],
  },
];

export const initialCoinsList: PortfolioCoin[] = [
  {
    symbol: "BTC",
    quantity: 5,
    avgBuyPrice: 65000,
    price: 70000,
    profit: 5350,
    transactions: [1, 3, 6],
  },
  {
    symbol: "ETH",
    quantity: 20,
    avgBuyPrice: 1800,
    price: 3300,
    profit: 400,
    transactions: [2],
  },
  {
    symbol: "SOL",
    quantity: 15,
    avgBuyPrice: 80,
    price: 130,
    profit: 10000,
    transactions: [4],
  },
  {
    symbol: "INJ",
    quantity: 249,
    avgBuyPrice: 28,
    price: 40.99,
    profit: 15799,
    transactions: [5, 7],
  },
  {
    symbol: "RNDR",
    quantity: 200,
    avgBuyPrice: 7,
    price: 10,
    profit: 15000,
    transactions: [8, 11, 12],
  },
  {
    symbol: "XAI",
    quantity: 1500,
    avgBuyPrice: 1.02,
    price: 2,
    profit: 350,
    transactions: [9, 10],
  },
];

export const initialTransactions: PortfolioTransaction[] = [
  {
    id: 1,
    date: "2023-02-17",
    type: "BUY",
    price: 25000,
    quantity: 1,
    coin: "BTC",
  },
  {
    id: 2,
    date: "2023-02-29",
    type: "BUY",
    price: 1800,
    quantity: 20,
    coin: "ETH",
  },
  {
    id: 3,
    date: "2023-04-25",
    type: "BUY",
    price: 35000,
    quantity: 5,
    coin: "BTC",
  },
  {
    id: 4,
    date: "2023-05-03",
    type: "BUY",
    price: 80,
    quantity: 15,
    coin: "SOL",
  },
  {
    id: 5,
    date: "2023-07-07",
    type: "BUY",
    price: 28,
    quantity: 500,
    coin: "INJ",
  },
  {
    id: 6,
    date: "2023-12-12",
    type: "SELL",
    price: 55000,
    quantity: 1,
    coin: "BTC",
  },
  {
    id: 7,
    date: "2024-01-01",
    type: "SELL",
    price: 50,
    quantity: 251,
    coin: "INJ",
  },
  {
    id: 8,
    date: "2024-02-10",
    type: "BUY",
    price: 6,
    quantity: 250,
    coin: "RNDR",
  },
  {
    id: 9,
    date: "2024-02-15",
    type: "BUY",
    price: 1.07,
    quantity: 500,
    coin: "XAI",
  },
  {
    id: 10,
    date: "2024-02-17",
    type: "BUY",
    price: 1,
    quantity: 1000,
    coin: "XAI",
  },
  {
    id: 11,
    date: "2024-03-29",
    type: "SELL",
    price: 10,
    quantity: 250,
    coin: "RNDR",
  },
  {
    id: 12,
    date: "2024-04-20",
    type: "BUY",
    price: 13.5,
    quantity: 200,
    coin: "RNDR",
  },
];
