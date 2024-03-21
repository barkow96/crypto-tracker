import { SearchCoinHandler } from "@/types/home-table";
import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Input, Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";

const HomeTableSettings: React.FC<{ searchCoinHandler: SearchCoinHandler }> = ({
  searchCoinHandler,
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
        <Select cursor="pointer">
          <option value={100}>100</option>
          <option value={50}>50</option>
          <option value={20}>20</option>
        </Select>
        <Flex gap="5px" align="center" cursor="pointer">
          <Icon as={SettingsIcon} />
          <Box>Customize</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeTableSettings;
