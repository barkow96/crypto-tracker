import { ReactNode } from "react";
import { HomeTableMetadata } from "./table";

export type HomeTableItemdata = {
  [key: string]: any;
  rank: number;
  name: string;
  ticker: string;
  price: number;
  marketCap: number;
  change1H: number;
  change24H: number;
  change7D: number;
  change30D: number;
  change90D: number;
  changeYTD: number;
  volume24H: number;
  volume7D: number;
  volume30D: number;
};

export type HomeTableItemProps = { data: HomeTableItemdata } & {
  settings: HomeTableMetadata;
};

export type CustomTdProps = {
  value: number | string | ReactNode;
  prefix?: string;
  sufix?: string;
};
