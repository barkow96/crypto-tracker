import { Box, Flex, Text } from "@chakra-ui/react";
import { Icon, StarIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { PortfolioProps } from "@/types/portfolio-panel/choose-portfolio-panel";
import { colors } from "@/constants/colors";

const icons = [StarIcon, MoonIcon, SunIcon];

const ChoosePortfolioPanelItem: React.FC<PortfolioProps> = ({
  item,
  portfolios,
  setPortfolios,
  selectPortfolioHandler,
}) => {
  const activePortfolioStyles = {
    backgroundColor: colors.bright,
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "auto",
  };

  return (
    <Flex
      marginBottom="10px"
      cursor="pointer"
      sx={item.isActive ? activePortfolioStyles : {}}
      onClick={
        !item.isActive
          ? () => {
              selectPortfolioHandler(item.id, portfolios, setPortfolios);
            }
          : undefined
      }
    >
      <Box>
        <Icon
          as={icons.find((icon) => icon.displayName === item.icon)}
          boxSize={15}
          marginLeft="15px"
          marginRight="15px"
        />
      </Box>
      <Box>
        <Text>{item.name}</Text>
        <Text fontStyle="italic">${item.value}</Text>
      </Box>
    </Flex>
  );
};

export default ChoosePortfolioPanelItem;
