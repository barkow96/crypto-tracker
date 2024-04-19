import {
  NEW_PORTFOLIO_DEFAULT_NAME,
  NEW_PORTFOLIO_DEFAULT_ICON,
} from "@/constants/portfolio";
import {
  AddPortfolioService,
  Portfolio,
} from "@/types/portfolio-panel/choose-portfolio-panel";

const addPortfolioService: AddPortfolioService = (setPortfolioList) => {
  setPortfolioList((prevPortfolioList) => {
    const lastPortfolioId = prevPortfolioList[prevPortfolioList.length - 1].id;
    const newPortfolio: Portfolio = {
      id: lastPortfolioId + 1,
      name: NEW_PORTFOLIO_DEFAULT_NAME,
      value: 0,
      icon: NEW_PORTFOLIO_DEFAULT_ICON,
      isActive: false,
    };
    return [...prevPortfolioList, newPortfolio];
  });
};

export default addPortfolioService;
