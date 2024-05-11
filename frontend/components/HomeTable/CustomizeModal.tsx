import { colors } from "@/constants/colors";
import { METRICS_CATEGORIES } from "@/constants/homeTable";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import clickMetricService from "./customizeModalServices/clickMetricService";
import { Metric } from "@/types/home-table/settings";
import { HomeTableMetadata } from "@/types/home-table/table";
import CustomModal from "../_ChakraUI/CustomModal";

type CustomizeModalProps = {
  tableMetadata: HomeTableMetadata;
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>;
  children: React.ReactNode;
};

const CustomizeModal: React.FC<CustomizeModalProps> = ({
  tableMetadata,
  setTableMetadata,
  children,
}) => {
  const modalMetrics: Metric[] = [];
  for (const key in tableMetadata)
    if (tableMetadata[key].category)
      modalMetrics.push({ name: key, ...tableMetadata[key] });

  const modalHeader = (
    <>
      <Text>Metrics Customization Panel</Text>
      <Text fontSize="12px">β stands for BETA version</Text>
    </>
  );

  const modalBody = METRICS_CATEGORIES.map((category) => (
    <Box key={category}>
      <Text my="10px" fontWeight="bold">
        {category.toUpperCase()}
      </Text>
      <Flex gap="10px">
        {modalMetrics.map((metric) => {
          if (category === metric.category)
            return (
              <Button
                key={metric.name}
                color={metric.isActive ? colors.green : colors.black}
                onClick={() => {
                  clickMetricService(metric, setTableMetadata);
                }}
              >
                {metric.header} {metric.isBetaVersion ? "(β)" : ""}
              </Button>
            );
          else return null;
        })}
      </Flex>
    </Box>
  ));

  return (
    <CustomModal header={modalHeader} body={modalBody}>
      {children}
    </CustomModal>
  );
};

export default CustomizeModal;
