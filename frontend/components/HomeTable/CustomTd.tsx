import { colors } from "@/constants/colors";
import { formatNumber } from "@/libs/utils";
import { CustomTdProps } from "@/types/home-table/item";
import { Td } from "@chakra-ui/react";

const CustomTd: React.FC<CustomTdProps> = ({ value, prefix, sufix }) => {
  const formattedValue =
    typeof value === "number" ? formatNumber(value) : value;
  const prefixWithLogic = value && prefix ? prefix : "";
  const sufixWithLogic = value && sufix ? sufix : "";

  let textColor = colors.black;
  if (value && typeof value === "number" && value > 0) textColor = colors.green;
  if (value && typeof value === "number" && value < 0)
    textColor = colors.lightRed;

  return (
    <Td color={textColor}>
      {prefixWithLogic}
      {!value && value !== "" && value !== 0 ? "n/a" : formattedValue}
      {sufixWithLogic}
    </Td>
  );
};

export default CustomTd;
