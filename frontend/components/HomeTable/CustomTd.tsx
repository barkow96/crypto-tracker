import { colors } from "@/constants/colors";
import { CustomTd } from "@/types/home-table";
import { Td } from "@chakra-ui/react";

const CustomTd: React.FC<CustomTd<number>> = ({ value, prefix, sufix }) => {
  const prefixWithLogic = value && prefix ? prefix : "";
  const sufixWithLogic = value && sufix ? sufix : "";

  let textColor = "black";
  if (value && value > 0) textColor = colors.green;
  if (value && value < 0) textColor = colors.lightRed;

  return (
    <Td color={textColor}>
      {prefixWithLogic}
      {value ? value : "n/a"}
      {sufixWithLogic}
    </Td>
  );
};

export default CustomTd;
