import { Box, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { Icon, EditIcon, CheckIcon } from "@chakra-ui/icons";
import {
  ChakraIcon,
  PortfolioProps,
} from "@/types/portfolio-panel/choose-portfolio-panel";
import { colors } from "@/constants/colors";
import { useRef, useState } from "react";
import { PORTFOLIO_FOCUS_DELAY, PORTFOLIO_ICONS } from "@/constants/portfolio";

type ChangedName = string | null;
type ChangedIcon = ChakraIcon | null;

const ChoosePortfolioPanelItem: React.FC<PortfolioProps> = ({
  item,
  setPortfolios,
  selectPortfolioHandler,
  editPortfolioHandler,
}) => {
  const [isEditting, setIsEditting] = useState(false);
  const [changedName, setChangedName] = useState<ChangedName>(null);
  const [changedIcon, setChangedIcon] = useState<ChangedIcon>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const activePortfolioStyles = {
    backgroundColor: colors.bright,
    borderRadius: "5px",
    fontWeight: "bold",
  };

  function toggleEdittingHandler() {
    if (isEditting) setIsEditting(false);
    else {
      setIsEditting(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, PORTFOLIO_FOCUS_DELAY);
    }
  }

  function submitEditHandler() {
    if (changedName && changedIcon)
      editPortfolioHandler(item.id, setPortfolios, changedName, changedIcon);
    else if (changedName)
      editPortfolioHandler(item.id, setPortfolios, changedName);
    else if (changedIcon)
      editPortfolioHandler(item.id, setPortfolios, undefined, changedIcon);

    setIsEditting(false);
    setChangedName(null);
    setChangedIcon(null);
  }

  return (
    <Flex
      width="100%"
      marginBottom="10px"
      padding="5px"
      sx={item.isActive ? activePortfolioStyles : {}}
    >
      <Box width="20%">
        <Icon
          as={PORTFOLIO_ICONS.find((icon) => icon.displayName === item.icon)}
          boxSize="25"
          marginLeft="15px"
          marginRight="15px"
          cursor="pointer"
          color={colors.red}
          _hover={{ transform: "scale(1.75)", transition: "0.3s" }}
          onClick={
            !item.isActive
              ? () => {
                  selectPortfolioHandler(item.id, setPortfolios);
                }
              : undefined
          }
        />
      </Box>
      <Box width="80%">
        <HStack>
          <Input
            disabled={!isEditting}
            defaultValue={item.name}
            onChange={(event) => {
              setChangedName(event.target.value);
            }}
            ref={inputRef}
            flex="1"
            border="none"
            sx={{
              "&:disabled": {
                opacity: "1",
                cursor: "auto",
              },
            }}
          />

          <Text flex="0">
            {!isEditting && (
              <EditIcon cursor="pointer" onClick={toggleEdittingHandler} />
            )}
            {isEditting && (
              <CheckIcon cursor="pointer" onClick={submitEditHandler} />
            )}
          </Text>
        </HStack>

        <Text fontStyle="italic">${item.value}</Text>
      </Box>
    </Flex>
  );
};

export default ChoosePortfolioPanelItem;
