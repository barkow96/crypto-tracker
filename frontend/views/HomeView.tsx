import HomeTable from "@/components/HomeTable/HomeTable";
import HomeViewFallback from "@/components/HomeTable/HomeViewFallback";
import PageContentLayout from "@/containers/PageContentLayout";
import { HomeTableItems } from "@/types/home-table/item";

const HomeView: React.FC<HomeTableItems> = ({ data, metaData, error }) => {
  return (
    <main>
      <PageContentLayout heading="Check the current prices, volumes and all you ever need...">
        {(error || !data) && (
          <HomeViewFallback isDataLoaded={data ? true : false} error={error} />
        )}
        {data && metaData && <HomeTable data={data} metaData={metaData} />}
      </PageContentLayout>
    </main>
  );
};

export default HomeView;
