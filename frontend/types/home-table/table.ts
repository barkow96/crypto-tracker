import { MetricsCategory, SortOptions } from "./settings";

export type HomeTableMetadata = {
  [key: string]: {
    isActive: boolean;
    header: string;
    sorting: SortOptions;
    category: MetricsCategory;
    custom?: { prefix?: string; sufix?: string; unstyled?: boolean };
    isBetaVersion?: boolean;
  };
};

export type SearchedCoin = string | null;
