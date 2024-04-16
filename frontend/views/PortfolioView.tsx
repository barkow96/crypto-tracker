import PageContentLayout from "@/containers/PageContentLayout";
import { Text } from "@chakra-ui/react";

const PortfolioView: React.FC = () => {
  return (
    <main>
      <PageContentLayout heading="Check your wallet - your purchases, sales, holdings...">
        <Text>Hello from Portfolio Page!</Text>
      </PageContentLayout>
    </main>
  );
};

export default PortfolioView;
