import { ComponentWithAs, IconProps } from "@chakra-ui/react";
import { PortfolioCoin } from "./portfolio-table";

export type ChakraIcon = "StarIcon" | "MoonIcon" | "SunIcon";

export type Portfolio = {
  id: number;
  name: string;
  icon: ChakraIcon;
  isActive: boolean;
  portfolio_coins: PortfolioCoin[];
};

export type PortfolioIcons = {
  name: ChakraIcon;
  component: ComponentWithAs<"svg", IconProps>;
}[];

export type PortfolioItems = {
  data?: {
    portfolios: Portfolio[];
  };
  metaData?: { ok: boolean; message?: string; error?: string };
};

export type PortfolioViewProps = PortfolioItems & { error?: string | null };
