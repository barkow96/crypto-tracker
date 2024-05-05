import STRAPI_updatePortfolio from "@/services/portfolio-panel/updatePortfolio";
import { SelectPortfolioService } from "@/types/portfolio-panel/choose-portfolio-panel";

const selectPortfolioService: SelectPortfolioService = async (
  jwt,
  selectedPortolioId,
  setPortfolioList
) => {
  const responseData = await STRAPI_updatePortfolio(
    jwt,
    selectedPortolioId,
    undefined,
    undefined,
    true
  );

  if (!responseData.metaData.ok) return;

  setPortfolioList((prevPortfolioList) => {
    const newPortfolioList = prevPortfolioList?.map((portfolio) => {
      if (portfolio.id === selectedPortolioId)
        return { ...portfolio, isActive: true };
      else return { ...portfolio, isActive: false };
    });

    if (newPortfolioList) return newPortfolioList;
    return prevPortfolioList;
  });
};

export default selectPortfolioService;
