import { colors } from "@/constants/colors";
import { PORTFOLIO_ICONS } from "@/constants/portfolio";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import { Box, Flex, Icon } from "@chakra-ui/react";

const MoveAssetModalItem: React.FC<{
  portfolio: Portfolio | undefined;
  clickable?: boolean;
}> = ({ portfolio, clickable }) => {
  const iconProps = {
    as: PORTFOLIO_ICONS.find((icon) => icon.name === portfolio?.icon)
      ?.component,
    boxSize: "25",
    color: colors.green,
  };

  return (
    <Box
      cursor={clickable ? "pointer" : "auto"}
      _hover={clickable ? { backgroundColor: colors.bright } : undefined}
    >
      <Flex gap="25px" marginTop="15px">
        <Box>
          <Icon {...iconProps} />
        </Box>
        <Box>
          <Box>{portfolio?.name}</Box>
          <Box fontWeight="bold">${portfolio?.value}</Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default MoveAssetModalItem;
