export type Portfolio = {
  id: number;
  name: string;
  value: number;
  icon: "StarIcon" | "MoonIcon" | "SunIcon";
  isActive: boolean;
};

export type PortfolioProps = {
  item: Portfolio;
  portfolios: Portfolio[];
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[]>>;
  selectPortfolioHandler: SelectPortfolioService;
};

export type SelectPortfolioService = (
  selectedPortolioId: number,
  portfolioList: Portfolio[],
  setPortfolioList: React.Dispatch<React.SetStateAction<Portfolio[]>>
) => void;

export type ChoosePortfolioPanelProps = {
  portfolios: Portfolio[];
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[]>>;
  selectPortfolioHandler: SelectPortfolioService;
};
