import { defineSortDirection, sortByProperty } from "@/libs/utils";
import { HomeTableItemdata } from "@/types/home-table/item";
import { SortOptions } from "@/types/home-table/settings";
import { HomeTableMetadata } from "@/types/home-table/table";

type SortService = (
  property: string,
  tableMetadata: HomeTableMetadata,
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>,
  setCoins: React.Dispatch<React.SetStateAction<HomeTableItemdata[]>>,
  coins: HomeTableItemdata[]
) => void;

const sortService: SortService = (
  property,
  tableMetadata,
  setTableMetadata,
  setCoins,
  coins
) => {
  const sortDirection: SortOptions = defineSortDirection(
    tableMetadata,
    property
  );

  const tableMetadataUpdated = { ...tableMetadata };
  for (const key in tableMetadataUpdated) {
    if (key !== property)
      tableMetadataUpdated[key] = {
        ...tableMetadataUpdated[key],
        sorting: "NO",
      };
    else if (key === property)
      tableMetadataUpdated[key] = {
        ...tableMetadataUpdated[key],
        sorting: sortDirection,
      };
  }
  setTableMetadata(tableMetadataUpdated);

  const sortedCoins: HomeTableItemdata[] = sortByProperty(
    property,
    [...coins],
    sortDirection
  );

  setCoins(sortedCoins);
};

export default sortService;
