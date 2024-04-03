import { HomeTableHeadersProps } from "@/types/home-table/table";
import { Th } from "@chakra-ui/react";
import { ReactNode } from "react";
import sortService from "./homeTableServices/sortService";

const HomeTableHeaders: React.FC<HomeTableHeadersProps> = ({
  tableMetadata,
  setTableMetadata,
  setCoins,
  coins,
}) => {
  const tableHeaders: ReactNode[] = Object.keys(tableMetadata).map((key) => {
    if (!tableMetadata[key].isActive) return null;

    const cursor = !tableMetadata[key].isBetaVersion ? "pointer" : "auto";
    const onClickHandler = !tableMetadata[key].isBetaVersion
      ? () => {
          sortService(key, tableMetadata, setTableMetadata, setCoins, coins);
        }
      : undefined;

    return (
      <Th key={key} cursor={cursor} onClick={onClickHandler}>
        {tableMetadata[key].header}
      </Th>
    );
  });

  return tableHeaders;
};
export default HomeTableHeaders;
