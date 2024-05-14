import HomeTable from "@/components/HomeTable/HomeTable";
import CustomViewFallback from "@/components/_ChakraUI/CustomViewFallback";
import PageContentLayout from "@/containers/PageContentLayout";
import { HomeTableItems } from "@/types/home-table/item";

const HomeView: React.FC<HomeTableItems> = ({ data, metaData, error }) => {
  return (
    <main>
      <PageContentLayout heading="Check the current prices, volumes and all you ever need...">
        {(error || !data) && (
          <CustomViewFallback isDataLoaded={data ? true : false} error={error}>
            Loading the data from server. Please wait...
          </CustomViewFallback>
        )}
        {data && metaData && <HomeTable data={data} metaData={metaData} />}
      </PageContentLayout>
    </main>
  );
};

export default HomeView;
