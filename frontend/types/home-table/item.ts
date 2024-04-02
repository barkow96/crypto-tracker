import { ReactNode } from "react";
import { HomeTableMetadata } from "./table";

export type HomeTableItemdata = {
  [key: string]: any;
  rank: number;
  symbol: string;
  price: number;
  priceChange24H: number;
  volume24H: number;
  lowPrice24H: number;
  highPrice24H: number;
  reference: string;
};

export type HomeTableItems = {
  data?: HomeTableItemdata[];
  metaData?: { dataParts: number };
  error?: string | null;
};

export type HomeTableProps = {
  data: HomeTableItemdata[];
  metaData: { dataParts: number };
};

export type HomeTableItemProps = { data: HomeTableItemdata } & {
  settings: HomeTableMetadata;
};

export type CustomTdProps = {
  value: number | string | ReactNode;
  prefix?: string;
  sufix?: string;
};
