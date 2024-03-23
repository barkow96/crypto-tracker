import { ChangeEvent } from "react";
import { HomeTableMetadata } from "./table";

export type HomeTableSettingsProps = {
  tableMetadata: HomeTableMetadata;
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>;
  searchCoinHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  selectRowsHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export type Metric = {
  name: string;
  isActive: boolean;
  header: string;
  sorting: SortOptions;
  category: MetricsCategory;
  custom?: { prefix?: string; sufix?: string };
};

export type SortOptions = "ASCENDING" | "DESCENDING" | "NO";
export type MetricsCategory =
  | "price"
  | "price change"
  | "market cap"
  | "volume"
  | null;

export type CustomizeModalProps = {
  tableMetadata: HomeTableMetadata;
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>;
  children: React.ReactNode;
};
