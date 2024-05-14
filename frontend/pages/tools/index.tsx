import PageContentLayout from "@/containers/PageContentLayout";
import { Text } from "@chakra-ui/react";
import Head from "next/head";

export default function ToolsPage() {
  return (
    <>
      <Head>
        <title>CryptoPulse: tools</title>
        <meta
          name="description"
          content="Use our in-built tools to understand better crypto!"
        />
      </Head>
      <PageContentLayout heading="Use our in-built tools to understand better crypto!">
        <Text as="p" marginTop="20px">
          This page is still in development. Please come back once it's ready.
          :)
        </Text>
      </PageContentLayout>
    </>
  );
}
