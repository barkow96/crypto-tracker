import {
  HomeTableItemdata,
  HomeTableMetadata,
  SortOptions,
} from "./../types/home-table";

export function sortByProperty(
  property: string,
  coins: HomeTableItemdata[],
  direction: SortOptions
) {
  let sortedCoins: HomeTableItemdata[];
  let directionNumber: number = 1;
  if (direction === "ASCENDING") directionNumber = 1;
  if (direction === "DESCENDING") directionNumber = -1;

  if (property === "name" || property === "ticker") {
    sortedCoins = coins.sort((coinA, coinB) => {
      if (coinA[property] < coinB[property]) return -1 * directionNumber;
      if (coinA[property] > coinB[property]) return 1 * directionNumber;
      else return 0;
    });
  } else
    sortedCoins = coins.sort(
      (coinA, coinB) =>
        directionNumber * coinA[property] - directionNumber * coinB[property]
    );

  return sortedCoins;
}

export function defineSortDirection(
  tableMetadata: HomeTableMetadata,
  property: string
) {
  let sortDirection: SortOptions = "ASCENDING";

  if (
    tableMetadata[property].sorting === "DESCENDING" ||
    tableMetadata[property].sorting === "NO"
  )
    sortDirection = "ASCENDING";
  if (tableMetadata[property].sorting === "ASCENDING")
    sortDirection = "DESCENDING";

  return sortDirection;
}
