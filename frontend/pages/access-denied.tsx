import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function AccessDenied() {
  const router = useRouter();
  const content = router.query.message;

  return (
    <div>
      <Head>
        <title>CryptoPulse: access denied</title>
        <meta name="description" content="No access to this pages!" />
      </Head>
      <Box>{content}</Box>
    </div>
  );
}
