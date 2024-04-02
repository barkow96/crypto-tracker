import fetchHomePageData from "@/services/fetchHomePageData";
import { HomeTableItems } from "@/types/home-table/item";
import { useEffect, useState } from "react";

export function useFetchedCoins(interval: number) {
  const [model, setModel] = useState<HomeTableItems | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchHomePageData();
        setModel(data);
      } catch (error) {
        setError("Data updating was unsuccessful...");
        console.log("Data updating was unsuccessful...");
      }
    }

    fetchData();

    const intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId);
  }, [fetchHomePageData, interval]);

  return { model, error };
}
