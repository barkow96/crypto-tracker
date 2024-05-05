import STRAPI_fetchHomePageData from "@/services/home-table/fetchHomePageData";
import { HomeTableItems } from "@/types/home-table/item";
import { useEffect, useState } from "react";

export function useFetchedCoins(interval: number) {
  const [model, setModel] = useState<HomeTableItems | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await STRAPI_fetchHomePageData();
        setModel(data);
      } catch (error) {
        setError("Fetching home page data from backend was unsuccessful...");
      }
    }

    fetchData();

    const intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId);
  }, [STRAPI_fetchHomePageData, interval]);

  return { model, error };
}
