import PortfolioPanel from "@/components/PortfolioPanel/PortfolioPanel";
import CustomViewFallback from "@/components/_ChakraUI/CustomViewFallback";
import PageContentLayout from "@/containers/PageContentLayout";
import { PortfolioViewProps } from "@/types/portfolio-panel/choose-portfolio-panel";

const PortfolioView: React.FC<PortfolioViewProps> = ({
  data,
  metaData,
  error,
}) => {
  return (
    <main>
      <PageContentLayout heading="Check your wallet - your purchases, sales, holdings...">
        {(error || !data) && (
          <CustomViewFallback isDataLoaded={data ? true : false} error={error}>
            Loading your portfolios from server. Please wait...
          </CustomViewFallback>
        )}
        {data && metaData && <PortfolioPanel data={data} metaData={metaData} />}
      </PageContentLayout>
    </main>
  );
};

export default PortfolioView;
