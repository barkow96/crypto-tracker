import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function AuthPage() {
  return (
    <>
      <Head>
        <title>CryptoPulse: watchlist</title>
        <meta
          name="description"
          content="Watch current coin prices and indicators!"
        />
      </Head>
      <Box>Hello from Watchlist Page!</Box>
    </>
  );
}
