import CustomMenuButton from "@/components/_ChakraUI/CustomMenuButton";
import {
  ChakraIcon,
  PortfolioIcons,
} from "@/types/portfolio-panel/choose-portfolio-panel";
import { CoinActions } from "@/types/portfolio-panel/portfolio-table";
import { Menu, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";

type CustomDropdownProps = {
  children: React.ReactNode;
  items: PortfolioIcons | CoinActions;
  exclusion?: ChakraIcon | string;
  allItemsHandler?: (value1: any) => void;
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  children,
  items,
  exclusion,
  allItemsHandler,
}) => {
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
                {"JSX" in item ? item.JSX : item.name}
              </MenuItem>
            );
          })}
      </MenuList>
    </Menu>
  );
};

export default CustomDropdown;
