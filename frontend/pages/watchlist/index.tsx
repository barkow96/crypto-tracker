import PageContentLayout from "@/containers/PageContentLayout";
import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function WatchlistPage() {
  return (
    <>
      <Head>
        <title>CryptoPulse: watchlist</title>
        <meta
          name="description"
          content="Watch current coin prices and indicators!"
        />
      </Head>
      <PageContentLayout heading="Watch your favourite coins, create Watch-Groups!">
        <Text as="p" marginTop="20px">
          This page is still in development. Please come back once it's ready.
          :)
        </Text>
      </PageContentLayout>
    </>
  );
}
