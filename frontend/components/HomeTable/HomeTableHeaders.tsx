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
    if (tableMetadata[key].isActive)
      return (
        <Th
          key={key}
          cursor="pointer"
          onClick={() => {
            sortService(key, tableMetadata, setTableMetadata, setCoins, coins);
          }}
        >
          {tableMetadata[key].header}
        </Th>
      );
    else return null;
  });

  return tableHeaders;
};
export default HomeTableHeaders;
