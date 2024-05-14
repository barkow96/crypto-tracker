import CustomMenuButton from "@/components/_ChakraUI/CustomMenuButton";
import { PORTFOLIO_ICONS } from "@/constants/portfolio";
import { ChakraIcon } from "@/types/portfolio-panel/choose-portfolio-panel";
import { Menu, MenuList, MenuItem } from "@chakra-ui/react";

const IconsDropdown: React.FC<{
  children: React.ReactNode;
  setChangedIcon: React.Dispatch<React.SetStateAction<ChakraIcon | undefined>>;
  currentIcon: ChakraIcon;
}> = ({ children, setChangedIcon, currentIcon }) => {
  return (
    <Menu>
      <CustomMenuButton paddingX={2} paddingY={1}>
        {children}
      </CustomMenuButton>
      <MenuList>
        {PORTFOLIO_ICONS.filter((icon) => icon.name !== currentIcon).map(
          (icon, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                setChangedIcon(icon.name);
              }}
            >
              {icon.name}
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
};

export default IconsDropdown;
