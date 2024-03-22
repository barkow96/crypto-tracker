import { CustomTdProps, HomeTableItemProps } from "@/types/home-table";
import { Tr } from "@chakra-ui/react";
import CustomTd from "./CustomTd";
import { ReactNode } from "react";

const HomeTableItem: React.FC<HomeTableItemProps> = (props) => {
  const { settings } = props;
  const { data } = props;

  const tableColumns: ReactNode[] = Object.entries(data).map(
    ([dataKey, dataValue]) => {
      if (!settings[dataKey].isActive) return null;

      const key = `${dataKey}-${dataValue}`;
      const customTdProps: CustomTdProps = { value: dataValue };
      if (settings[dataKey].custom && settings[dataKey].custom?.prefix)
        customTdProps.prefix = settings[dataKey].custom?.prefix;
      if (settings[dataKey].custom && settings[dataKey].custom?.sufix)
        customTdProps.sufix = settings[dataKey].custom?.sufix;

      return <CustomTd key={key} {...customTdProps} />;
    }
  );

  return <Tr>{tableColumns}</Tr>;
};

export default HomeTableItem;
