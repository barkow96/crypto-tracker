import { Tr } from "@chakra-ui/react";
import CustomTd from "./CustomTd";
import { ReactNode } from "react";
import { CustomTdProps, HomeTableItemdata } from "@/types/home-table/item";
import { BETA_PLACEHOLDER } from "@/constants/constants";
import { HomeTableMetadata } from "@/types/home-table/table";

type HomeTableItemProps = { data: HomeTableItemdata } & {
  settings: HomeTableMetadata;
};

const HomeTableItem: React.FC<HomeTableItemProps> = (props) => {
  const { settings } = props;
  const { data } = props;

  const tableColumns: ReactNode[] = Object.keys(settings).map((key) => {
    if (!settings[key].isActive) return null;
    if (settings[key].isBetaVersion)
      return <CustomTd key={key} value={BETA_PLACEHOLDER} />;

    const customTdProps: CustomTdProps = { value: data[key] };
    if (settings[key].custom && settings[key].custom?.prefix)
      customTdProps.prefix = settings[key].custom?.prefix;
    if (settings[key].custom && settings[key].custom?.sufix)
      customTdProps.sufix = settings[key].custom?.sufix;

    return <CustomTd key={key} {...customTdProps} />;
  });

  return <Tr>{tableColumns}</Tr>;
};

export default HomeTableItem;