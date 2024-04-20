import { ComponentWithAs, IconProps } from "@chakra-ui/react";

export type ChakraIcon = "StarIcon" | "MoonIcon" | "SunIcon";

export type Portfolio = {
  id: number;
  name: string;
  value: number;
  icon: ChakraIcon;
  isActive: boolean;
  coins: string[];
};

export type PortfolioCoin = {
  symbol: string;
  quantity: number;
  avgBuyPrice: number;
  price: number;
  profit: number;
  transactions: number[];
};

export type PortfolioTransaction = {
  id: number;
  date: string;
  type: string;
  price: number;
  quantity: number;
  coin: string;
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
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[]>>;
  selectPortfolioHandler: SelectPortfolioService;
  addPortfolioHandler: AddPortfolioService;
  editPortfolioHandler: EditPortfolioService;
};
