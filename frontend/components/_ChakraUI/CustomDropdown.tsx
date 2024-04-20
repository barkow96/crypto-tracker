import CustomMenuButton from "@/components/_ChakraUI/CustomMenuButton";
import {
  ChakraIcon,
  PortfolioIcons,
} from "@/types/portfolio-panel/choose-portfolio-panel";
import { Menu, MenuList, MenuItem } from "@chakra-ui/react";

type CoinActions = { name: string; handler: () => void }[];

type DropdownItems = PortfolioIcons | CoinActions;

const CustomDropdown: React.FC<{
  children: React.ReactNode;
  items: DropdownItems;
  exclusion?: ChakraIcon | string;
  allItemsHandler?: (value1: any) => void;
}> = ({ children, items, exclusion, allItemsHandler }) => {
  return (
    <Menu>
      <CustomMenuButton paddingX={2} paddingY={1}>
        {children}
      </CustomMenuButton>
      <MenuList>
        {items
          .filter((item) => {
            if (exclusion) return item.name !== exclusion;
            else return true;
          })
          .map((item, index) => {
            let itemHandler = undefined;
            if (allItemsHandler)
              itemHandler = () => {
                allItemsHandler(item.name);
              };
            else if ("handler" in item) itemHandler = item.handler;

            return (
              <MenuItem key={index} onClick={itemHandler}>
                {item.name}
              </MenuItem>
            );
          })}
      </MenuList>
    </Menu>
  );
};

export default CustomDropdown;
