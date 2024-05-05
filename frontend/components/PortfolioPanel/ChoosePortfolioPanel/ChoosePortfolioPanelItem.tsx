import { Box, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { Icon, EditIcon, CheckIcon } from "@chakra-ui/icons";
import {
  ChakraIcon,
  PortfolioProps,
} from "@/types/portfolio-panel/choose-portfolio-panel";
import { colors } from "@/constants/colors";
import { useEffect, useRef, useState } from "react";
import { PORTFOLIO_FOCUS_DELAY, PORTFOLIO_ICONS } from "@/constants/portfolio";
import CustomDropdown from "@/components/_ChakraUI/CustomDropdown";
import { useSession } from "next-auth/react";

export type ChangedName = string | null;
export type ChangedIcon = ChakraIcon | null;

const ChoosePortfolioPanelItem: React.FC<PortfolioProps> = ({
  item,
  setPortfolios,
  selectPortfolioHandler,
  editPortfolioHandler,
}) => {
  const { data: sessionData, status: sessionStatus } = useSession();
  const [isEditting, setIsEditting] = useState(false);
  const [changedName, setChangedName] = useState<string | undefined>(undefined);
  const [changedIcon, setChangedIcon] = useState<ChakraIcon | undefined>(
    undefined
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    submitEditHandler();
  }, [changedIcon]);

  function submitEditHandler() {
    editPortfolioHandler(
      sessionData?.user.jwt,
      item.id,
      setPortfolios,
      changedName,
      changedIcon
    );

    setIsEditting(false);
    setChangedName(undefined);
    setChangedIcon(undefined);
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
          <CustomDropdown
            items={PORTFOLIO_ICONS}
            exclusion={item.icon}
            allItemsHandler={setChangedIcon}
          >
            <Icon {...iconProps} />
          </CustomDropdown>
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
