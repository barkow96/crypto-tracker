import { PortfolioItems } from "./../../types/portfolio-panel/choose-portfolio-panel";
import fetchPortfoliosData from "@/services/fetchPortfoliosData";
import { useEffect, useState } from "react";

export function useFetchedPortfolios(jwt: string | null | undefined) {
  const [model, setModel] = useState<PortfolioItems | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchPortfoliosData(jwt);

        setModel(data);
      } catch (error) {
        setError("Fetching portfolios from backend was unsuccessful...");
      }
    }

    if (typeof jwt === "string") fetchData();
  }, [fetchPortfoliosData, jwt]);

  return { model, error };
}
