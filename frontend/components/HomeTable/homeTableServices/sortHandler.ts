import { defineSortDirection, sortByProperty } from "@/libs/utils";
import {
  HomeTableItemdata,
  HomeTableMetadata,
  SortOptions,
} from "@/types/home-table";

export function sortHandler(
  property: string,
  tableMetadata: HomeTableMetadata,
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>,
  setCoins: React.Dispatch<React.SetStateAction<HomeTableItemdata[]>>,
  coins: HomeTableItemdata[]
) {
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
      sorting: sortDirection,
    },
  }));

  const sortedCoins: HomeTableItemdata[] = sortByProperty(
    property,
    [...coins],
    sortDirection
  );

  setCoins(sortedCoins);
}
