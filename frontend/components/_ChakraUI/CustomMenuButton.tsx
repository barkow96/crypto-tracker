import { colors } from "@/constants/colors";
import { MenuButton } from "@chakra-ui/react";

const CustomMenuButton: React.FC<{
  children: React.ReactNode;
  paddingX: number;
  paddingY: number;
  isHoverUsed?: boolean;
  isExpandedUsed?: boolean;
  isFocusUsed?: boolean;
}> = ({
  children,
  paddingX,
  paddingY,
  isHoverUsed,
  isExpandedUsed,
  isFocusUsed,
}) => {
  return (
    <MenuButton
      px={paddingX}
      py={paddingY}
      transition="all 0.2s"
      borderRadius="md"
      borderWidth="2px"
      _hover={isHoverUsed ? { bg: colors.bright } : {}}
      _expanded={isExpandedUsed ? { bg: colors.red } : {}}
      _focus={isFocusUsed ? { outline: 0, boxShadow: "outline" } : {}}
    >
      {children}
    </MenuButton>
  );
};
export default CustomMenuButton;
