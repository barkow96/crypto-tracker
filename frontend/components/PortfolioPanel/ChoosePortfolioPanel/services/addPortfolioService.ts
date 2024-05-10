import STRAPI_addPortfolio from "@/services/portfolio-panel/addPortfolio";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";

export type AddPortfolioService = (
  jwt: string | null | undefined,
  setPortfolioList: React.Dispatch<
    React.SetStateAction<Portfolio[] | undefined>
  >
) => void;

const addPortfolioService: AddPortfolioService = async (
  jwt,
  setPortfolioList
) => {
  const responseData = await STRAPI_addPortfolio(jwt);

  if (!responseData || !responseData.metaData.ok) return;

  setPortfolioList((prevPortfolioList) => {
    if (prevPortfolioList === undefined) return prevPortfolioList;

    const newPortfolio = {
      id: responseData.data.createdPortfolio.id,
      name: responseData.data.createdPortfolio.name,
      icon: responseData.data.createdPortfolio.icon,
      isActive: responseData.data.createdPortfolio.isActive,
      portfolio_coins: [],
    };

    if (prevPortfolioList.length === 0) return [newPortfolio];
    return [...prevPortfolioList, newPortfolio];
  });
};

export default addPortfolioService;
