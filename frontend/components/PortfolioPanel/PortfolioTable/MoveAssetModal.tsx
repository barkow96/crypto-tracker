import CustomModal from "@/components/_ChakraUI/CustomModal";
import { colors } from "@/constants/colors";
import { PortfolioCoin } from "@/types/portfolio-panel/portfolio-table";
import { Box, Button, Text } from "@chakra-ui/react";
import MoveAssetModalItem from "./MoveAssetModalItem";
import { useState } from "react";
import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";
import { useSession } from "next-auth/react";
import { MoveCoinService } from "./services/moveCoinService";

type MoveAssetModalProps = {
  children: React.ReactNode;
  handler: MoveCoinService;
  coin: PortfolioCoin;
  activePortfolio: Portfolio | undefined;
  portfolios: Portfolio[] | undefined;
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[] | undefined>>;
};

const MoveAssetModal: React.FC<MoveAssetModalProps> = ({
  children,
  handler,
  coin,
  activePortfolio,
  portfolios,
  setPortfolios,
}) => {
  const { data: sessionData, status: sessionStatus } = useSession();
  const [destinationPortfolioId, setDestinationPortfolioId] = useState<
    number | undefined
  >(undefined);
  const modalHeader = <Text>Move asset</Text>;
  const modalBody = (
    <Box>
      <Box>
        <Text textAlign="center" fontWeight="bold">
          Move <span style={{ color: colors.reddish[600] }}>{coin.symbol}</span>{" "}
          from
        </Text>
        <MoveAssetModalItem portfolio={activePortfolio} />
      </Box>
      <Box>
        <Text textAlign="center" fontWeight="bold">
          to
        </Text>
        {portfolios &&
          portfolios
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
          color={colors.darkbluish[200]}
          backgroundColor={
            destinationPortfolioId ? colors.darkbluish[600] : undefined
          }
          _hover={
            destinationPortfolioId
              ? { backgroundColor: colors.darkbluish[700] }
              : undefined
          }
          onClick={() => {
            handler(
              sessionData?.user.jwt,
              activePortfolio?.id,
              destinationPortfolioId,
              coin,
              setPortfolios
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
