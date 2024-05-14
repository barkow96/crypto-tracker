import { colors } from "@/constants/colors";
import { MenuButton } from "@chakra-ui/react";

const CustomMenuButton: React.FC<{
  children: React.ReactNode;
  paddingX: number;
  paddingY: number;
  isBorderUsed?: boolean;
  isHoverUsed?: boolean;
  isExpandedUsed?: boolean;
  isFocusUsed?: boolean;
}> = ({
  children,
  paddingX,
  paddingY,
  isBorderUsed,
  isHoverUsed,
  isExpandedUsed,
  isFocusUsed,
}) => {
  return (
    <MenuButton
      px={paddingX}
      py={paddingY}
      transition="all 0.2s"
      borderRadius={isBorderUsed ? "md" : undefined}
      borderWidth={isBorderUsed ? "2px" : undefined}
      _hover={isHoverUsed ? { bg: colors.darkbluish[100] } : undefined}
      _expanded={isExpandedUsed ? { bg: colors.reddish[300] } : undefined}
      _focus={isFocusUsed ? { outline: 0, boxShadow: "outline" } : undefined}
    >
      {children}
    </MenuButton>
  );
};
export default CustomMenuButton;
