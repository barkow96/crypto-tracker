import { HomeTableMetadata } from "@/types/home-table";

export const TABLE_INITIAL_CONFIG: HomeTableMetadata = {
  rank: { isActive: true, header: "#", sorting: "ASCENDING" },
  name: { isActive: true, header: "coin", sorting: "NO" },
  ticker: { isActive: true, header: "ticker", sorting: "NO" },
  price: {
    isActive: true,
    header: "price",
    sorting: "NO",
    custom: { prefix: "$" },
  },
  marketCap: {
    isActive: true,
    header: "market cap",
    sorting: "NO",
    custom: { prefix: "$" },
  },
  change1H: {
    isActive: true,
    header: "1h",
    sorting: "NO",
    custom: { sufix: "%" },
  },
  change24H: {
    isActive: true,
    header: "24h",
    sorting: "NO",
    custom: { sufix: "%" },
  },
  change7D: {
    isActive: true,
    header: "7d",
    sorting: "NO",
    custom: { sufix: "%" },
  },
  change30D: {
    isActive: false,
    header: "30d",
    sorting: "NO",
    custom: { sufix: "%" },
  },
  change90D: {
    isActive: false,
    header: "90d",
    sorting: "NO",
    custom: { sufix: "%" },
  },
  changeYTD: {
    isActive: false,
    header: "ytd",
    sorting: "NO",
    custom: { sufix: "%" },
  },
  volume24H: {
    isActive: true,
    header: "volume 24h",
    sorting: "NO",
    custom: { prefix: "$" },
  },
  volume7D: {
    isActive: false,
    header: "volume 7d",
    sorting: "NO",
    custom: { prefix: "$" },
  },
  volume30D: {
    isActive: false,
    header: "volume 30d",
    sorting: "NO",
    custom: { prefix: "$" },
  },
};
