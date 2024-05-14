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
  data: HomeTableItemdata[];
  metaData?: {
    ok: boolean;
    dataParts?: number;
    message?: string;
    error?: string;
  };
};

export type HomeViewProps = HomeTableItems & {
  data?: HomeTableItemdata[];
  error?: string | null;
};
