export type MetricsCategory =
  | "price"
  | "price change"
  | "market cap"
  | "volume"
  | null;

export type Metric = {
  name: string;
  isActive: boolean;
  header: string;
  sorting: SortOptions;
  category: MetricsCategory;
  custom?: { prefix?: string; sufix?: string };
  isBetaVersion?: boolean;
};

export type SortOptions = "ASCENDING" | "DESCENDING" | "NO";
