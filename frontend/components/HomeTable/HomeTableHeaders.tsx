import { Th } from "@chakra-ui/react";
import { ReactNode } from "react";
import sortService from "./homeTableServices/sortService";
import { HomeTableMetadata } from "@/types/home-table/table";
import { HomeTableItemdata } from "@/types/home-table/item";

type HomeTableHeadersProps = {
  tableMetadata: HomeTableMetadata;
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>;
  setCoins: React.Dispatch<React.SetStateAction<HomeTableItemdata[]>>;
  coins: HomeTableItemdata[];
};

const HomeTableHeaders: React.FC<HomeTableHeadersProps> = ({
  tableMetadata,
  setTableMetadata,
  setCoins,
  coins,
}) => {
  const tableHeaders: ReactNode[] = Object.keys(tableMetadata).map((key) => {
    if (!tableMetadata[key].isActive) return null;

    return (
      <Th
        key={key}
        cursor={!tableMetadata[key].isBetaVersion ? "pointer" : "auto"}
        onClick={
          !tableMetadata[key].isBetaVersion
            ? () => {
                sortService(
                  key,
                  tableMetadata,
                  setTableMetadata,
                  setCoins,
                  coins
                );
              }
            : undefined
        }
      >
        {tableMetadata[key].header}
      </Th>
    );
  });

  return tableHeaders;
};
export default HomeTableHeaders;
