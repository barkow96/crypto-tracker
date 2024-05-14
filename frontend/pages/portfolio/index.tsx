import { useFetchedPortfolios } from "@/hooks/portfolio-panel/useFetchedPortfolios";
import PortfolioView from "@/views/PortfolioView";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function PortfolioPage() {
  const { data: sessionData, status: sessionStatus } = useSession();
  const { model, error } = useFetchedPortfolios(sessionData?.user.jwt);

  return (
    <>
      <Head>
        <title>CryptoPulse: portfolio</title>
        <meta name="description" content="Track your purchases and sales!" />
      </Head>

      {model ? (
        <PortfolioView data={model.data} metaData={model.metaData} />
      ) : (
        <PortfolioView error={error} />
      )}
    </>
  );
}
