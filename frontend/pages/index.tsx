import { HOME_PAGE_REFRESH_INTERVAL } from "@/constants/constants";
import { useFetchedCoins } from "@/hooks/useFetchedCoins";
import HomeView from "@/views/HomeView";
import Head from "next/head";

export default function HomePage() {
  const { model, error } = useFetchedCoins(HOME_PAGE_REFRESH_INTERVAL);

  return (
    <>
      <Head>
        <title>CryptoPulse</title>
        <meta
          name="description"
          content="Check the current prices, volumes and all you ever need..."
        />
      </Head>
      {model ? (
        <HomeView data={model.data} metaData={model.metaData} />
      ) : (
        <HomeView error={error} />
      )}
    </>
  );
}
