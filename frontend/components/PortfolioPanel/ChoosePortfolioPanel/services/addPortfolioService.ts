import {
  AddPortfolioService,
  Portfolio,
} from "@/types/portfolio-panel/choose-portfolio-panel";

const addPortfolioService: AddPortfolioService = (
  newPortfolioName,
  setPortfolioList
) => {
  setPortfolioList((prevPortfolioList) => {
    const lastPortfolioId = prevPortfolioList[prevPortfolioList.length - 1].id;
    const newPortfolio: Portfolio = {
      id: lastPortfolioId + 1,
      name: newPortfolioName,
      value: 0,
      icon: "SunIcon",
      isActive: false,
    };

    const newPortfolioList = prevPortfolioList;
    newPortfolioList.push(newPortfolio);

    return newPortfolioList;
  });
};

export default addPortfolioService;
