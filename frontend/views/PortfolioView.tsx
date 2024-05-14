import PortfolioPanel from "@/components/PortfolioPanel/PortfolioPanel";
import PageContentLayout from "@/containers/PageContentLayout";

const PortfolioView: React.FC = () => {
  return (
    <main>
      <PageContentLayout heading="Check your wallet - your purchases, sales, holdings...">
        <PortfolioPanel />
      </PageContentLayout>
    </main>
  );
};

export default PortfolioView;
