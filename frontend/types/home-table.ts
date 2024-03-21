import { ChangeEvent } from "react";

export type HomeTableItemProps = {
  rank: number;
  name: string;
  ticker: string;
  price: number;
  marketCap: number;
  change1H?: number;
  change24H?: number;
  change7D?: number;
  change30D?: number;
  change90D?: number;
  changeYTD?: number;
  volume24H?: number;
  volume7D?: number;
  volume30D?: number;
};

export type CustomTd<T> = {
  value: T | undefined;
  prefix?: string;
  sufix?: string;
};

export type SearchedCoin = string | null;
export type SearchCoinHandler = (event: ChangeEvent<HTMLInputElement>) => void;
