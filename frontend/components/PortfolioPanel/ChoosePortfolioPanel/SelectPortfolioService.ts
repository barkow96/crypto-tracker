import { SelectPortfolioService } from "@/types/portfolio-panel/choose-portfolio-panel";

const selectPortfolioService: SelectPortfolioService = (
  selectedPortolioId,
  portfolioList,
  setPortfolioList
) => {
  const newPortfolioList = portfolioList.map((portfolio) => {
    if (portfolio.id === selectedPortolioId)
      return { ...portfolio, isActive: true };
    else return { ...portfolio, isActive: false };
  });
  setPortfolioList(newPortfolioList);
};

export default selectPortfolioService;
