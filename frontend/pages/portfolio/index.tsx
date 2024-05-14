import PortfolioView from "@/views/PortfolioView";
import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>CryptoPulse: portfolio</title>
        <meta name="description" content="Track your purchases and sales!" />
      </Head>
      <PortfolioView />
    </>
  );
}
