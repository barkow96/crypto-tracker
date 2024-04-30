import { ComponentWithAs, IconProps } from "@chakra-ui/react";

export type ChakraIcon = "StarIcon" | "MoonIcon" | "SunIcon";

export type Portfolio = {
  id: number;
  name: string;
  value: number;
  icon: ChakraIcon;
  isActive: boolean;
  coins?: {
    id: number;
    avgBuyPrice: number;
    quantity: number;
    symbol: string;
  }[];
};

export type PortfolioIcons = {
  name: ChakraIcon;
  component: ComponentWithAs<"svg", IconProps>;
}[];

export type ChangedName = string | null;
export type ChangedIcon = ChakraIcon | null;

export type SelectPortfolioService = (
  selectedPortolioId: number,
  setPortfolioList: React.Dispatch<React.SetStateAction<Portfolio[]>>
) => void;

export type AddPortfolioService = (
  setPortfolioList: React.Dispatch<React.SetStateAction<Portfolio[]>>
) => void;

export type EditPortfolioService = (
  selectedPortolioId: number,
  setPortfolioList: React.Dispatch<React.SetStateAction<Portfolio[]>>,
  newPortfolioName?: string,
  newPortfolioIcon?: ChakraIcon
) => void;

export type PortfolioProps = {
  item: Portfolio;
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[]>>;
  selectPortfolioHandler: SelectPortfolioService;
  editPortfolioHandler: EditPortfolioService;
};

export type ChoosePortfolioPanelProps = {
  portfolios: Portfolio[];
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[] | undefined>>;
  selectPortfolioHandler: SelectPortfolioService;
  addPortfolioHandler: AddPortfolioService;
  editPortfolioHandler: EditPortfolioService;
};

export type PortfolioItems = {
  data?: {
    portfolios: Portfolio[];
  };
  metaData?: {};
};

export type PortfolioViewProps = PortfolioItems & { error?: string | null };
