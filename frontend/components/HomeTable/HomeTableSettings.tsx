import {
  HomeTableMetadata,
  SearchCoinHandler,
  SelectRowsHandler,
} from "@/types/home-table";
import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Input, Select, Text } from "@chakra-ui/react";
import CustomizeModal from "./CustomizeModal";

const HomeTableSettings: React.FC<{
  tableMetadata: HomeTableMetadata;
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>;
  searchCoinHandler: SearchCoinHandler;
  selectRowsHandler: SelectRowsHandler;
}> = ({
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
          <option value={10}>10</option>
          <option value={5}>5</option>
          <option value={2}>2</option>
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
