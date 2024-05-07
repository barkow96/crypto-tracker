import { ComponentWithAs, IconProps } from "@chakra-ui/react";
import { PortfolioCoin } from "./portfolio-table";

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

export type SelectPortfolioService = (
  jwt: string | null | undefined,
  selectedPortolioId: number,
  setPortfolioList: React.Dispatch<
    React.SetStateAction<Portfolio[] | undefined>
  >
) => void;

export type AddPortfolioService = (
  jwt: string | null | undefined,
  setPortfolioList: React.Dispatch<
    React.SetStateAction<Portfolio[] | undefined>
  >
) => void;

export type EditPortfolioService = (
  jwt: string | null | undefined,
  selectedPortolioId: number,
  setPortfolioList: React.Dispatch<
    React.SetStateAction<Portfolio[] | undefined>
  >,
  newPortfolioName?: string,
  newPortfolioIcon?: ChakraIcon
) => void;

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
