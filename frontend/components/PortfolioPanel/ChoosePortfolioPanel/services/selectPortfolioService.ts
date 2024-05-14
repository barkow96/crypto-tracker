import { SelectPortfolioService } from "@/types/portfolio-panel/choose-portfolio-panel";

const selectPortfolioService: SelectPortfolioService = (
  selectedPortolioId,
  setPortfolioList
) => {
  setPortfolioList((prevPortfolioList) => {
    const newPortfolioList = prevPortfolioList.map((portfolio) => {
      if (portfolio.id === selectedPortolioId)
        return { ...portfolio, isActive: true };
      else return { ...portfolio, isActive: false };
    });

    return newPortfolioList;
  });
};

export default selectPortfolioService;
