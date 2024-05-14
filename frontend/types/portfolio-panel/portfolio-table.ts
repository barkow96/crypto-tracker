import {
  BuyOrSellInputType,
  NumberInputType,
  StringInputType,
} from "../project-wide";
import { Portfolio } from "./choose-portfolio-panel";

export type PortfolioCoin = {
  symbol: string;
  quantity: number;
  avgBuyPrice: number;
  price: number;
  profit: number;
  transactions: number[];
};

export type PortfolioTransaction = {
  id: number;
  date: string;
  type: string;
  price: number;
  quantity: number;
  coin: string;
};

export type RemoveCoinService = (
  portfolioId: number | undefined,
  coinName: string,
  setPortfolioList: React.Dispatch<React.SetStateAction<Portfolio[]>>,
  setPortfolioCoins: React.Dispatch<
    React.SetStateAction<PortfolioCoin[] | undefined>
  >
) => void;

export type MoveCoinService = (
  sourcePortfolioId: number | undefined,
  destinationPortfolioId: number | undefined,
  coinName: string,
  setPortfolioList: React.Dispatch<React.SetStateAction<Portfolio[]>>
) => void;

export type AddTransactionService = (
  date: string,
  type: "BUY" | "SELL",
  price: number,
  quantity: number,
  coin: string,
  setPortfolioCoins: React.Dispatch<
    React.SetStateAction<PortfolioCoin[] | undefined>
  >,
  setPortfolioTransactions: React.Dispatch<
    React.SetStateAction<PortfolioTransaction[] | undefined>
  >
) => void;

export type CoinActions = {
  name: string;
  handler?: () => void;
  handlerArgs?: { numberOf: number; args: any[] };
  JSX?: React.ReactNode;
}[];

export type ActivePortfolioProps = {
  activePortfolio: Portfolio | undefined;
  portfolios: Portfolio[];
  setPortfolioList: React.Dispatch<React.SetStateAction<Portfolio[]>>;
  portfolioCoins: PortfolioCoin[] | undefined;
  setPortfolioCoins: React.Dispatch<
    React.SetStateAction<PortfolioCoin[] | undefined>
  >;
  portfolioTransactions: PortfolioTransaction[] | undefined;
  setPortfolioTransactions: React.Dispatch<
    React.SetStateAction<PortfolioTransaction[] | undefined>
  >;
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
  | { task: "VALIDATE"; property: TransactionInputField };
