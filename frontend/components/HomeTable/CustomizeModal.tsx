import { colors } from "@/constants/colors";
import { METRICS_CATEGORIES } from "@/constants/table";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import clickMetricService from "./customizeModalServices/clickMetricService";
import { Metric } from "@/types/home-table/settings";
import { HomeTableMetadata } from "@/types/home-table/table";

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
  const Overlay = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="20%"
      backdropBlur="1px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<Overlay />);

  const metrics: Metric[] = [];
  for (const key in tableMetadata)
    if (tableMetadata[key].category)
      metrics.push({ name: key, ...tableMetadata[key] });

  return (
    <>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<Overlay />);
          onOpen();
        }}
      >
        {children}
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>
            <Text>Metrics Customization Panel</Text>
            <Text fontSize="12px">β stands for BETA version</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {METRICS_CATEGORIES.map((category) => (
              <Box key={category}>
                <Text my="10px" fontWeight="bold">
                  {category.toUpperCase()}
                </Text>
                <Flex gap="10px">
                  {metrics.map((metric) => {
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
            ))}
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomizeModal;
