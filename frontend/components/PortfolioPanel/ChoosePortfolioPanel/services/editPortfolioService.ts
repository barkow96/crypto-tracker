import STRAPI_updatePortfolio from "@/services/portfolio-panel/updatePortfolio";
import {
  ChakraIcon,
  Portfolio,
} from "@/types/portfolio-panel/choose-portfolio-panel";

export type EditPortfolioService = (
  jwt: string | null | undefined,
  selectedPortolioId: number,
  setPortfolioList: React.Dispatch<
    React.SetStateAction<Portfolio[] | undefined>
  >,
  newPortfolioName?: string,
  newPortfolioIcon?: ChakraIcon
) => void;

const editPortfolioService: EditPortfolioService = async (
  jwt,
  selectedPortolioId,
  setPortfolioList,
  newPortfolioName,
  newPortfolioIcon
) => {
  if (!newPortfolioName && !newPortfolioIcon) return;

  const responseData = await STRAPI_updatePortfolio(
    jwt,
    selectedPortolioId,
    newPortfolioName,
    newPortfolioIcon
  );

  if (!responseData || !responseData.metaData.ok) return;

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
