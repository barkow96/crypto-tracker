export type ChakraIcon = "StarIcon" | "MoonIcon" | "SunIcon";

export type Portfolio = {
  id: number;
  name: string;
  value: number;
  icon: ChakraIcon;
  isActive: boolean;
};

export type SelectPortfolioService = (
  selectedPortolioId: number,
  setPortfolioList: React.Dispatch<React.SetStateAction<Portfolio[]>>
) => void;

export type AddPortfolioService = (
  newPortfolioName: string,
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
  addPortfolioHandler: AddPortfolioService;
  editPortfolioHandler: EditPortfolioService;
};

export type ChoosePortfolioPanelProps = {
  portfolios: Portfolio[];
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[]>>;
  selectPortfolioHandler: SelectPortfolioService;
};
