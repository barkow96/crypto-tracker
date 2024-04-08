import { HomeTableMetadata } from "@/types/home-table/table";

export const TABLE_INITIAL_CONFIG: HomeTableMetadata = {
  rank: {
    isActive: true,
    header: "#",
    sorting: "ASCENDING",
    category: null,
  },
  fullname: {
    isActive: false,
    header: "fullname",
    sorting: "NO",
    category: null,
    isBetaVersion: true,
  },
  symbol: { isActive: true, header: "coin", sorting: "NO", category: null },
  reference: {
    isActive: false,
    header: "reference",
    sorting: "NO",
    category: null,
    isBetaVersion: true,
  },
  price: {
    isActive: true,
    header: "current price",
    sorting: "NO",
    category: "price",
    custom: { prefix: "$" },
  },
  lowPrice24H: {
    isActive: false,
    header: "low price 24h",
    sorting: "NO",
    category: "price",
    custom: { prefix: "$" },
  },
  highPrice24H: {
    isActive: false,
    header: "high price 24h",
    sorting: "NO",
    category: "price",
    custom: { prefix: "$" },
  },
  marketCap: {
    isActive: false,
    header: "market cap",
    sorting: "NO",
    category: "market cap",
    custom: { prefix: "$" },
    isBetaVersion: true,
  },
  priceChange1H: {
    isActive: false,
    header: "1h",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
    isBetaVersion: true,
  },
  priceChange24H: {
    isActive: true,
    header: "24h",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
  },
  priceChange7D: {
    isActive: false,
    header: "7d",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
    isBetaVersion: true,
  },
  priceChange30D: {
    isActive: false,
    header: "30d",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
    isBetaVersion: true,
  },
  priceChange90D: {
    isActive: false,
    header: "90d",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
    isBetaVersion: true,
  },
  priceChangeYTD: {
    isActive: false,
    header: "ytd",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
    isBetaVersion: true,
  },
  volume24H: {
    isActive: true,
    header: "volume 24h",
    sorting: "NO",
    category: "volume",
    custom: { prefix: "$" },
  },
  volume7D: {
    isActive: false,
    header: "volume 7d",
    sorting: "NO",
    category: "volume",
    custom: { prefix: "$" },
    isBetaVersion: true,
  },
  volume30D: {
    isActive: false,
    header: "volume 30d",
    sorting: "NO",
    category: "volume",
    custom: { prefix: "$" },
    isBetaVersion: true,
  },
};

export const METRICS_CATEGORIES = [
  "price",
  "price change",
  "market cap",
  "volume",
];
