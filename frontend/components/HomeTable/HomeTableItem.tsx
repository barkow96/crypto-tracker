import { colors } from "@/constants/colors";
import { HomeTableItemProps } from "@/types/home-table";
import { Td, Tr } from "@chakra-ui/react";
import CustomTd from "./CustomTd";

const HomeTableItem: React.FC<HomeTableItemProps> = (props) => {
  const { rank, name, ticker, price, marketCap } = props;
  const {
    change1H,
    change24H,
    change7D,
    change30D,
    change90D,
    changeYTD,
    volume24H,
    volume7D,
    volume30D,
  } = props;

  return (
    <Tr>
      <Td>{rank}</Td>
      <Td>
        {name} <span style={{ color: colors.gray }}>{ticker}</span>
      </Td>
      <Td>${price}</Td>
      <Td>${marketCap}</Td>
      <CustomTd value={change1H} sufix="%" />
      <CustomTd value={change24H} sufix="%" />
      <CustomTd value={change7D} sufix="%" />
      <CustomTd value={change30D} sufix="%" />
      <CustomTd value={change90D} sufix="%" />
      <CustomTd value={changeYTD} sufix="%" />
      <CustomTd value={volume24H} prefix="$" />
      <CustomTd value={volume7D} prefix="$" />
      <CustomTd value={volume30D} prefix="$" />
    </Tr>
  );
};

export default HomeTableItem;
