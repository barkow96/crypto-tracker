import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Input, Select, Text } from "@chakra-ui/react";
import CustomizeModal from "./CustomizeModal";
import { ROWS_NUMBER } from "@/constants/constants";
import { HomeTableSettingsProps } from "@/types/home-table/settings";

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
      px="20px"
      margin="auto"
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
        <Flex gap="5px" align="center" cursor="pointer">
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
    </Flex>
  );
};

export default HomeTableSettings;
