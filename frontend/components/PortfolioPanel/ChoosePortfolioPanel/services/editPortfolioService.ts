import { EditPortfolioService } from "@/types/portfolio-panel/choose-portfolio-panel";

const editPortfolioService: EditPortfolioService = (
  selectedPortolioId,
  setPortfolioList,
  newPortfolioName,
  newPortfolioIcon
) => {
  if (!newPortfolioName && !newPortfolioIcon) return;

  setPortfolioList((prevPortfolioList) => {
    const newPortfolioList = prevPortfolioList.map((portfolio) => {
      if (portfolio.id === selectedPortolioId) {
        if (newPortfolioName && newPortfolioIcon)
          return {
            ...portfolio,
            name: newPortfolioName,
            icon: newPortfolioIcon,
          };
        else if (newPortfolioName)
          return {
            ...portfolio,
            name: newPortfolioName,
          };
        else if (newPortfolioIcon)
          return {
            ...portfolio,
            icon: newPortfolioIcon,
          };
        else return portfolio;
      } else return portfolio;
    });

    return newPortfolioList;
  });
};

export default editPortfolioService;
