import STRAPI_updatePortfolio from "@/services/portfolio-panel/updatePortfolio";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";

export type SelectPortfolioService = (
  jwt: string | null | undefined,
  selectedPortolioId: number,
  setPortfolioList: React.Dispatch<
    React.SetStateAction<Portfolio[] | undefined>
  >
) => void;

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
