import STRAPI_updatePortfolio from "@/services/portfolio-panel/updatePortfolio";
import { EditPortfolioService } from "@/types/portfolio-panel/choose-portfolio-panel";

const editPortfolioService: EditPortfolioService = async (
  jwt,
  selectedPortolioId,
  setPortfolioList,
  newPortfolioName,
  newPortfolioIcon
) => {
  if (!newPortfolioName && !newPortfolioIcon) return;

  const response = await STRAPI_updatePortfolio(
    jwt,
    selectedPortolioId,
    newPortfolioName,
    newPortfolioIcon
  );

  if (!response.metaData.ok) return;

  setPortfolioList((prevPortfolioList) => {
    const newPortfolioList = prevPortfolioList?.map((portfolio) => {
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

    if (newPortfolioList) return newPortfolioList;
    return prevPortfolioList;
  });
};

export default editPortfolioService;
