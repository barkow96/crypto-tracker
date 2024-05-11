import {
  BuyOrSellInputType,
  NumberInputType,
  StringInputType,
} from "../project-wide";
import { Portfolio } from "./choose-portfolio-panel";

export type PortfolioCoin = {
  id: number;
  symbol: string;
  quantity: number;
  avgBuyPrice: number;
  portfolio_transactions: PortfolioTransaction[];
};

export type PortfolioTransaction = {
  id: number;
  date: string;
  type: string;
  price: number;
  quantity: number;
};

export type CoinActions = {
  name: string;
  handler?: () => void;
  handlerArgs?: { numberOf: number; args: any[] };
  JSX?: React.ReactNode;
}[];

export type ActivePortfolioProps = {
  activePortfolio: Portfolio;
  portfolios: Portfolio[] | undefined;
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[] | undefined>>;
};

export type TransactionInputField =
  | "coinName"
  | "type"
  | "date"
  | "price"
  | "quantity";

export type TransactionFormDataType = {
  [key: string]: StringInputType | NumberInputType | BuyOrSellInputType;
  coinName: StringInputType;
  type: BuyOrSellInputType;
  date: StringInputType;
  price: NumberInputType;
  quantity: NumberInputType;
};

export type TransactionActionType =
  | { task: "UPDATE"; property: TransactionInputField; payload: string }
  | { task: "VALIDATE"; property: TransactionInputField }
  | { task: "RESET" };
