import { HomeTableMetadata } from "@/types/home-table";

export const TABLE_INITIAL_CONFIG: HomeTableMetadata = {
  rank: { isActive: true, header: "#", sorting: "ASCENDING", category: null },
  name: { isActive: true, header: "coin", sorting: "NO", category: null },
  ticker: { isActive: true, header: "ticker", sorting: "NO", category: null },
  price: {
    isActive: true,
    header: "price",
    sorting: "NO",
    category: "price",
    custom: { prefix: "$" },
  },
  marketCap: {
    isActive: true,
    header: "market cap",
    sorting: "NO",
    category: "market cap",
    custom: { prefix: "$" },
  },
  change1H: {
    isActive: true,
    header: "1h",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
  },
  change24H: {
    isActive: true,
    header: "24h",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
  },
  change7D: {
    isActive: true,
    header: "7d",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
  },
  change30D: {
    isActive: false,
    header: "30d",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
  },
  change90D: {
    isActive: false,
    header: "90d",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
  },
  changeYTD: {
    isActive: false,
    header: "ytd",
    sorting: "NO",
    category: "price change",
    custom: { sufix: "%" },
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
  },
  volume30D: {
    isActive: false,
    header: "volume 30d",
    sorting: "NO",
    category: "volume",
    custom: { prefix: "$" },
  },
};

export const METRICS_CATEGORIES = [
  "price",
  "price change",
  "market cap",
  "volume",
];
