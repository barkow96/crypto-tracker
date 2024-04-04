import { HomeTableItemdata } from "@/types/home-table/item";
import { SortOptions } from "@/types/home-table/settings";
import { HomeTableMetadata } from "@/types/home-table/table";

export function sortByProperty(
  property: string,
  coins: HomeTableItemdata[],
  direction: SortOptions
) {
  let sortedCoins: HomeTableItemdata[];
  let directionNumber: number = 1;
  if (direction === "ASCENDING") directionNumber = 1;
  if (direction === "DESCENDING") directionNumber = -1;

  if (property === "symbol") {
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

export function formatNumber(number: number) {
  if (Math.abs(number) >= 0.01 && number % 1 === 0) return number;
  if (Math.abs(number) < 10 && Math.abs(number) >= 0.01 && number % 1 !== 0)
    return parseFloat(number.toFixed(3));
  if (Math.abs(number) < 100 && Math.abs(number) >= 10 && number % 1 !== 0)
    return parseFloat(number.toFixed(2));
  if (Math.abs(number) >= 100 && number % 1 !== 0)
    return parseFloat(number.toFixed(1));
  if (Math.abs(number) < 0.01 && Math.abs(number) >= 0.00001)
    return parseFloat(number.toFixed(6));
  if (Math.abs(number) < 0.00001) return parseFloat(number.toFixed(8));

  return number;
}
