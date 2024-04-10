import { Box, Table, Thead, Tbody, Tr, TableContainer } from "@chakra-ui/react";
import HomeTableSettings from "./HomeTableSettings";
import HomeTableItem from "./HomeTableItem";
import { useEffect, useState } from "react";
import { useFilteredCoins } from "@/hooks/useFilteredCoins";
import { PAGINATION_INITIAL_PAGE, ROWS_NUMBER } from "@/constants/constants";
import Pagination from "./Pagination";
import { TABLE_INITIAL_CONFIG } from "@/constants/table";
import searchCoinService from "./homeTableServices/searchCoinService";
import selectRowsService from "./homeTableServices/selectRowsService";
import { usePages } from "@/hooks/usePages";
import { SearchedCoin } from "@/types/home-table/table";
import HomeTableHeaders from "./HomeTableHeaders";
import applySortingService from "./homeTableServices/applySortingService";
import { HomeTableItemdata } from "@/types/home-table/item";

type HomeTableProps = {
  data: HomeTableItemdata[];
  metaData: { dataParts: number };
};

const HomeTable: React.FC<HomeTableProps> = ({ data, metaData }) => {
  const [coins, setCoins] = useState(data);
  const [searchedCoin, setSearchedCoin] = useState<SearchedCoin>(null);
  const { filteredCoins, setFilteredCoins } = useFilteredCoins(
    coins,
    searchedCoin
  );
  const [tableMetadata, setTableMetadata] = useState(TABLE_INITIAL_CONFIG);
  const [rowsQuantity, setRowsQuantity] = useState(ROWS_NUMBER.MAX);
  const { currentPage, setCurrentPage } = usePages(
    PAGINATION_INITIAL_PAGE,
    Math.ceil(filteredCoins.length / rowsQuantity)
  );

  useEffect(() => {
    applySortingService(tableMetadata, data, setCoins);
  }, [data]);

  return (
    <Box>
      <HomeTableSettings
        tableMetadata={tableMetadata}
        setTableMetadata={setTableMetadata}
        searchCoinHandler={(event) => {
          searchCoinService(
            event.target.value,
            setSearchedCoin,
            setCurrentPage
          );
        }}
        selectRowsHandler={(event) => {
          selectRowsService(
            event.target.value,
            setRowsQuantity,
            setCurrentPage
          );
        }}
      />

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <HomeTableHeaders
                tableMetadata={tableMetadata}
                setTableMetadata={setTableMetadata}
                setCoins={setFilteredCoins}
                coins={filteredCoins}
              />
            </Tr>
          </Thead>
          <Tbody>
            {filteredCoins.map((coin, index) => {
              if (
                index >= (currentPage - 1) * rowsQuantity &&
                index < currentPage * rowsQuantity
              )
                return (
                  <HomeTableItem
                    key={index}
                    data={{ ...coin }}
                    settings={tableMetadata}
                  />
                );
              else return null;
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
        totalPages={Math.ceil(filteredCoins.length / rowsQuantity)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
};

export default HomeTable;
