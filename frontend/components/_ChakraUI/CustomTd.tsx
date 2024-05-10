import { colors } from "@/constants/colors";
import { formatNumber } from "@/libs/utils";
import { Td } from "@chakra-ui/react";
import { ReactNode } from "react";

export type CustomTdProps = {
  value: number | string | ReactNode;
  prefix?: string;
  sufix?: string;
  unstyled?: boolean;
};

const CustomTd: React.FC<CustomTdProps> = ({
  value,
  prefix,
  sufix,
  unstyled,
}) => {
  const formattedValue =
    typeof value === "number" ? formatNumber(value) : value;
  const prefixWithLogic = value && prefix ? prefix : "";
  const sufixWithLogic = value && sufix ? sufix : "";

  let textColor;
  if (value && typeof value === "number" && value > 0) textColor = colors.green;
  if (value && typeof value === "number" && value < 0)
    textColor = colors.lightRed;
  if (unstyled) textColor = colors.black;

  return (
    <Td style={{ color: textColor, minWidth: "100px", maxWidth: "100px" }}>
      {prefixWithLogic}
      {!value && value !== "" && value !== 0 ? "n/a" : formattedValue}
      {sufixWithLogic}
    </Td>
  );
};

export default CustomTd;
