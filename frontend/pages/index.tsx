import HomeView from "@/views/HomeView";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>CryptoPulse</title>
        <meta
          name="description"
          content="Check the current prices, volumes and all you ever need..."
        />
      </Head>
      <HomeView />
    </>
  );
}
