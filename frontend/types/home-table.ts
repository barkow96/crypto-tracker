import { ChangeEvent, ReactNode } from "react";

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

export type HomeTableMetadata = {
  [key: string]: {
    isActive: boolean;
    header: string;
    sorting: SortOptions;
    custom?: { prefix?: string; sufix?: string };
  };
};

export type HomeTableItemProps = { data: HomeTableItemdata } & {
  settings: HomeTableMetadata;
};

export type CustomTdProps = {
  value: number | string | ReactNode;
  prefix?: string;
  sufix?: string;
};

export type SearchedCoin = string | null;
export type SearchCoinHandler = (event: ChangeEvent<HTMLInputElement>) => void;
export type SelectRowsHandler = (event: ChangeEvent<HTMLSelectElement>) => void;

export type PaginationProps = {
  totalPages: number;
  pageChangeHandler: (pageId: number) => void;
};

export type SortOptions = "ASCENDING" | "DESCENDING" | "NO";
