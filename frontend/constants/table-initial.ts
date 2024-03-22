import { HomeTableMetadata } from "@/types/home-table";

export const TABLE_INITIAL_CONFIG: HomeTableMetadata = {
  rank: { isActive: true, header: "#" },
  name: { isActive: true, header: "coin" },
  ticker: { isActive: true, header: "ticker" },
  price: { isActive: true, header: "price", custom: { prefix: "$" } },
  marketCap: { isActive: true, header: "market cap", custom: { prefix: "$" } },
  change1H: { isActive: true, header: "1h", custom: { sufix: "%" } },
  change24H: { isActive: true, header: "24h", custom: { sufix: "%" } },
  change7D: { isActive: true, header: "7d", custom: { sufix: "%" } },
  change30D: { isActive: false, header: "30d", custom: { sufix: "%" } },
  change90D: { isActive: false, header: "90d", custom: { sufix: "%" } },
  changeYTD: { isActive: false, header: "ytd", custom: { sufix: "%" } },
  volume24H: { isActive: false, header: "volume 24h", custom: { prefix: "$" } },
  volume7D: { isActive: false, header: "volume 7d", custom: { prefix: "$" } },
  volume30D: { isActive: false, header: "volume 30d", custom: { prefix: "$" } },
};
