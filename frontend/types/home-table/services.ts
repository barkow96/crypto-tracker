import { ChangeEvent } from "react";
import { HomeTableMetadata, SearchedCoin } from "./table";
import { HomeTableItemdata } from "./item";
import { Metric } from "./settings";

export type SearchCoinService = (
  event: ChangeEvent<HTMLInputElement>,
  setSearchedCoin: React.Dispatch<React.SetStateAction<SearchedCoin>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => void;

export type SelectRowsService = (
  event: ChangeEvent<HTMLSelectElement>,
  setRowsQuantity: React.Dispatch<React.SetStateAction<number>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => void;

export type SortService = (
  property: string,
  tableMetadata: HomeTableMetadata,
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>,
  setCoins: React.Dispatch<React.SetStateAction<HomeTableItemdata[]>>,
  coins: HomeTableItemdata[]
) => void;

export type PaginationButtonService = (
  action: "PREVIOUS" | "NEXT",
  currentPage: number,
  totalPages: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => void;

export type ClickMetricService = (
  metric: Metric,
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>
) => void;
