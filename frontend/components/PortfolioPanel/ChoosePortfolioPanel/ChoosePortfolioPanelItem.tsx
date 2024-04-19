import { Box, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { Icon, EditIcon, CheckIcon } from "@chakra-ui/icons";
import {
  ChangedIcon,
  ChangedName,
  PortfolioProps,
} from "@/types/portfolio-panel/choose-portfolio-panel";
import { colors } from "@/constants/colors";
import { useEffect, useRef, useState } from "react";
import { PORTFOLIO_FOCUS_DELAY, PORTFOLIO_ICONS } from "@/constants/portfolio";
import IconsDropdown from "./IconsDropdown";

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

  useEffect(() => {
    submitEditHandler();
  }, [changedIcon]);

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

  function toggleEdittingHandler() {
    if (isEditting) setIsEditting(false);
    else {
      setIsEditting(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, PORTFOLIO_FOCUS_DELAY);
    }
  }

  const iconProps = {
    as: PORTFOLIO_ICONS.find((icon) => icon.name === item.icon)?.component,
    onClick: !item.isActive
      ? () => {
          selectPortfolioHandler(item.id, setPortfolios);
        }
      : undefined,
    boxSize: "25",
    cursor: "pointer",
    color: colors.green,
  };

  const activePortfolioStyles = {
    backgroundColor: colors.bright,
    borderRadius: "5px",
    fontWeight: "bold",
  };

  return (
    <Flex
      align="center"
      width="100%"
      gap="25px"
      marginBottom="10px"
      padding="5px"
      sx={item.isActive ? activePortfolioStyles : {}}
    >
      <Box width="20%" display="flex" justifyContent="center">
        {isEditting ? (
          <IconsDropdown
            setChangedIcon={setChangedIcon}
            currentIcon={item.icon}
          >
            <Icon {...iconProps} />
          </IconsDropdown>
        ) : (
          <Icon {...iconProps} />
        )}
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
            px="0"
            sx={{
              "&:disabled": {
                opacity: "1",
                cursor: "auto",
              },
            }}
          />

          <Text flex="0">
            {isEditting ? (
              <CheckIcon cursor="pointer" onClick={submitEditHandler} />
            ) : (
              <EditIcon cursor="pointer" onClick={toggleEdittingHandler} />
            )}
          </Text>
        </HStack>

        <Text fontStyle="italic">${item.value}</Text>
      </Box>
    </Flex>
  );
};

export default ChoosePortfolioPanelItem;
