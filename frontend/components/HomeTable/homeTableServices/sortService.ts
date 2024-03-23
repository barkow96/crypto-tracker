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
  const sortDirection: SortOptions = defineSortDirection(
    tableMetadata,
    property
  );

  setTableMetadata((prevState) => ({
    ...prevState,
    [property]: {
      isActive: prevState[property].isActive,
      header: prevState[property].header,
      custom: prevState[property].custom,
      category: prevState[property].category,
      sorting: sortDirection,
    },
  }));

  const sortedCoins: HomeTableItemdata[] = sortByProperty(
    property,
    [...coins],
    sortDirection
  );

  setCoins(sortedCoins);
};

export default sortService;
