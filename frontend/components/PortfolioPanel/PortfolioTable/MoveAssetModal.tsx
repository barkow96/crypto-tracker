import CustomModal from "@/components/_ChakraUI/CustomModal";
import { colors } from "@/constants/colors";
import {
  ActivePortfolioProps,
  MoveCoinService,
} from "@/types/portfolio-panel/portfolio-table";
import { Box, Button, Text } from "@chakra-ui/react";
import MoveAssetModalItem from "./MoveAssetModalItem";
import { useState } from "react";

type MoveAssetModalProps = {
  children: React.ReactNode;
  handler: MoveCoinService;
  coinName: string;
} & ActivePortfolioProps;

const MoveAssetModal: React.FC<MoveAssetModalProps> = ({
  children,
  activePortfolio,
  portfolios,
  setPortfolioList,
  handler,
  coinName,
}) => {
  const [destinationPortfolioId, setDestinationPortfolioId] = useState<
    number | undefined
  >(undefined);
  const modalHeader = <Text>Move asset</Text>;
  const modalBody = (
    <Box>
      <Box>
        <Text textAlign="center" fontWeight="bold">
          Move <span style={{ color: colors.red }}>{coinName}</span> from
        </Text>
        <MoveAssetModalItem portfolio={activePortfolio} />
      </Box>
      <Box>
        <Text textAlign="center" fontWeight="bold">
          to
        </Text>
        {portfolios
          .filter((portfolio) => portfolio.id !== activePortfolio?.id)
          .map((portfolio) => (
            <Box
              key={portfolio.id}
              onClick={() => {
                setDestinationPortfolioId(portfolio.id);
              }}
            >
              <MoveAssetModalItem portfolio={portfolio} clickable />
            </Box>
          ))}
      </Box>
      <Box marginTop="40px">
        {destinationPortfolioId && (
          <Text>
            From{" "}
            <span style={{ fontWeight: "bold" }}>{activePortfolio?.name}</span>{" "}
            to{" "}
            <span style={{ fontWeight: "bold" }}>
              {
                portfolios?.find(
                  (portfolio) => portfolio.id === destinationPortfolioId
                )?.name
              }
              .
            </span>
          </Text>
        )}
        <Button
          width="100%"
          marginTop="15px"
          isDisabled={destinationPortfolioId ? false : true}
          _hover={
            destinationPortfolioId
              ? { backgroundColor: colors.green }
              : undefined
          }
          onClick={() => {
            handler(
              activePortfolio?.id,
              destinationPortfolioId,
              coinName,
              setPortfolioList
            );
          }}
        >
          Confirm movement
        </Button>
      </Box>
    </Box>
  );

  return (
    <CustomModal header={modalHeader} body={modalBody} unstyled>
      {children}
    </CustomModal>
  );
};

export default MoveAssetModal;
