import { ComponentWithAs, IconProps } from "@chakra-ui/react";
import { PortfolioCoin } from "./portfolio-table";
import { SelectPortfolioService } from "@/components/PortfolioPanel/ChoosePortfolioPanel/services/selectPortfolioService";
import { EditPortfolioService } from "@/components/PortfolioPanel/ChoosePortfolioPanel/services/editPortfolioService";

export type ChakraIcon = "StarIcon" | "MoonIcon" | "SunIcon";

export type Portfolio = {
  id: number;
  name: string;
  icon: ChakraIcon;
  isActive: boolean;
  coins: PortfolioCoin[];
};

export type PortfolioIcons = {
  name: ChakraIcon;
  component: ComponentWithAs<"svg", IconProps>;
}[];

export type PortfolioProps = {
  item: Portfolio;
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[] | undefined>>;
  selectPortfolioHandler: SelectPortfolioService;
  editPortfolioHandler: EditPortfolioService;
};

export type ChoosePortfolioPanelProps = {
  portfolios: Portfolio[];
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[] | undefined>>;
  selectPortfolioHandler: SelectPortfolioService;
  editPortfolioHandler: EditPortfolioService;
};

export type PortfolioItems = {
  data?: {
    portfolios: Portfolio[];
  };
  metaData?: {};
};

export type PortfolioViewProps = PortfolioItems & { error?: string | null };
