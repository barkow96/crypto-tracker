import { HomeTableItemdata } from "./item";
import { MetricsCategory, SortOptions } from "./settings";

export type HomeTableMetadata = {
  [key: string]: {
    isActive: boolean;
    header: string;
    sorting: SortOptions;
    category: MetricsCategory;
    custom?: { prefix?: string; sufix?: string };
  };
};

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export type SearchedCoin = string | null;

export type HomeTableHeadersProps = {
  tableMetadata: HomeTableMetadata;
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>;
  setCoins: React.Dispatch<React.SetStateAction<HomeTableItemdata[]>>;
  coins: HomeTableItemdata[];
};
