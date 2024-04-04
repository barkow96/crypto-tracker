import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Input, Select, Text } from "@chakra-ui/react";
import CustomizeModal from "./CustomizeModal";
import { ROWS_NUMBER } from "@/constants/constants";
import { ChangeEvent } from "react";
import { HomeTableMetadata } from "@/types/home-table/table";

type HomeTableSettingsProps = {
  tableMetadata: HomeTableMetadata;
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>;
  searchCoinHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  selectRowsHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const HomeTableSettings: React.FC<HomeTableSettingsProps> = ({
  tableMetadata,
  setTableMetadata,
  searchCoinHandler,
  selectRowsHandler,
}) => {
  return (
    <Flex
      width="100%"
      justify="space-between"
      align="center"
      p="15px"
      gap="15px"
      px="20px"
      margin="auto"
      direction={{ base: "column", md: "row" }}
    >
      <Box>
        <Input placeholder="Search for a coin" onChange={searchCoinHandler} />
      </Box>
      <Flex gap="20px">
        <Select cursor="pointer" onChange={selectRowsHandler}>
          <option value={ROWS_NUMBER.MAX}>{ROWS_NUMBER.MAX}</option>
          <option value={ROWS_NUMBER.MEDIUM}>{ROWS_NUMBER.MEDIUM}</option>
          <option value={ROWS_NUMBER.MIN}>{ROWS_NUMBER.MIN}</option>
        </Select>

        <Box>
          <CustomizeModal
            tableMetadata={tableMetadata}
            setTableMetadata={setTableMetadata}
          >
            <Icon as={SettingsIcon} mx="10px" />
            <Text>Customize</Text>
          </CustomizeModal>
        </Box>
      </Flex>
    </Flex>
  );
};

export default HomeTableSettings;
