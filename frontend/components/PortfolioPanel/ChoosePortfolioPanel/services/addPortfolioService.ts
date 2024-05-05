import STRAPI_addPortfolio from "@/services/portfolio-panel/addPortfolio";
import { AddPortfolioService } from "@/types/portfolio-panel/choose-portfolio-panel";

const addPortfolioService: AddPortfolioService = async (
  jwt,
  setPortfolioList
) => {
  const responseData = await STRAPI_addPortfolio(jwt);

  if (!responseData.metaData.ok) return;

  setPortfolioList((prevPortfolioList) => {
    if (prevPortfolioList === undefined) return prevPortfolioList;

    const lastPortfolioId = prevPortfolioList
      ? prevPortfolioList[prevPortfolioList.length - 1].id
      : null;
    if (lastPortfolioId === null) return prevPortfolioList;
    else
      return [
        ...prevPortfolioList,
        {
          id: responseData.data.createdPortfolio.id,
          name: responseData.data.createdPortfolio.name,
          icon: responseData.data.createdPortfolio.icon,
          isActive: responseData.data.createdPortfolio.isActive,
          coins: [],
        },
      ];
  });
};

export default addPortfolioService;
