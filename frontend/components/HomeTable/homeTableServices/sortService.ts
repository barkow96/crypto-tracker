import { defineSortDirection, sortByProperty } from "@/libs/utils";
import { HomeTableItemdata } from "@/types/home-table/item";
import { SortService } from "@/types/home-table/services";
import { SortOptions } from "@/types/home-table/settings";

const sortService: SortService = (
  property,
  tableMetadata,
  setTableMetadata,
  setCoins,
  coins
) => {
  console.log("Soooort!", property);
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
