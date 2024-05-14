import CustomModal from "@/components/_ChakraUI/CustomModal";
import CustomTd from "@/components/_ChakraUI/CustomTd";
import { colors } from "@/constants/colors";
import { PortfolioCoin } from "@/types/portfolio-panel/portfolio-table";
import {
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type ViewTransactionsModalProps = {
  children: React.ReactNode;
  coin: PortfolioCoin;
  portfolioName: string;
};
const ViewTransactionsModal: React.FC<ViewTransactionsModalProps> = ({
  children,
  coin,
  portfolioName,
}) => {
  const modalHeader = (
    <>
      <Text>View asset transactions</Text>
      <Text fontWeight="normal">
        Purchases and sales for{" "}
        <span style={{ color: colors.reddish[600], fontWeight: "bold" }}>
          {coin?.symbol}.{" "}
        </span>
        {portfolioName && (
          <>
            This coin belongs to{" "}
            <span style={{ color: colors.greenish[600], fontWeight: "bold" }}>
              {portfolioName}
            </span>{" "}
            portfolio.
          </>
        )}
      </Text>
    </>
  );
  const modalBody = (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>date</Th>
            <Th>action</Th>
            <Th>price</Th>
            <Th>quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {coin.portfolio_transactions.map((transaction) => (
            <Tr key={transaction.id}>
              <CustomTd unstyled value={transaction.date} />
              <CustomTd unstyled value={transaction.type} />
              <CustomTd unstyled value={transaction.price} />
              <CustomTd unstyled value={transaction.quantity} />
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );

  return (
    <CustomModal header={modalHeader} body={modalBody} unstyled>
      {children}
    </CustomModal>
  );
};

export default ViewTransactionsModal;
