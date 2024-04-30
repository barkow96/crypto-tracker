import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import { useEffect, useState } from "react";

export function useActivePortfolio(portfolioList: Portfolio[] | undefined) {
  const [activePortfolio, setActivePortfolio] = useState<Portfolio | undefined>(
    undefined
  );

  useEffect(() => {
    const newActivePortfolio = portfolioList?.find(
      (portfolio) => portfolio.isActive
    );
    setActivePortfolio(newActivePortfolio);
  }, [portfolioList]);

  return { activePortfolio };
}
