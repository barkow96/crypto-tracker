import { PortfolioItems } from "./../../types/portfolio-panel/choose-portfolio-panel";
import STRAPI_fetchPortfoliosData from "@/services/portfolio-panel/fetchPortfoliosData";
import { useEffect, useState } from "react";

export function useFetchedPortfolios(jwt: string | null | undefined) {
  const [model, setModel] = useState<PortfolioItems | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await STRAPI_fetchPortfoliosData(jwt);

        setModel(data);
      } catch (error) {
        setError("Fetching portfolios from backend was unsuccessful...");
      }
    }

    if (typeof jwt === "string") fetchData();
  }, [STRAPI_fetchPortfoliosData, jwt]);

  return { model, error };
}
