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

type HomeTableItemsMetadata = {
  ok: boolean;
  dataParts?: number;
  message?: string;
  error?: string;
};

export type HomeTableItems = {
  data: HomeTableItemdata[];
  metaData?: HomeTableItemsMetadata;
};

export type HomeViewProps = {
  data?: HomeTableItemdata[];
  metaData?: HomeTableItemsMetadata;
  error?: string | null;
};
