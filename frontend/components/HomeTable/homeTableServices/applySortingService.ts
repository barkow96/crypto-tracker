import { sortByProperty } from "@/libs/utils";
import { HomeTableItemdata } from "@/types/home-table/item";
import { HomeTableMetadata } from "@/types/home-table/table";

type ApplySortingService = (
  tableMetadata: HomeTableMetadata,
  coins: HomeTableItemdata[],
  setCoins: React.Dispatch<React.SetStateAction<HomeTableItemdata[]>>
) => void;

const applySortingService: ApplySortingService = (
  tableMetadata,
  coins,
  setCoins
) => {
  const sortedProperty = Object.entries(tableMetadata).find(
    ([key, value]) => value.sorting !== "NO"
  );
  const sortedPropertyName =
    sortedProperty && sortedProperty[0] ? sortedProperty[0] : null;
  const sortedPropertyDirection =
    sortedProperty && sortedProperty[1] ? sortedProperty[1].sorting : null;

  if (!sortedPropertyName || !sortedPropertyDirection) {
    setCoins(coins);
    return;
  }

  const sortedCoins: HomeTableItemdata[] = sortByProperty(
    sortedPropertyName,
    coins,
    sortedPropertyDirection
  );
  setCoins(sortedCoins);
};

export default applySortingService;
