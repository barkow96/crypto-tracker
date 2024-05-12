import { colors } from "@/constants/colors";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

type CustomModalProps = {
  children: React.ReactNode;
  body: React.ReactNode;
  header: React.ReactNode;
  unstyled?: boolean;
};

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  body,
  header,
  unstyled,
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

  const unstyledStyleProps = unstyled
    ? {
        textAlign: undefined,
        fontWeight: undefined,
        bg: undefined,
        padding: 0,
        marginLeft: 0,
        _hover: undefined,
      }
    : undefined;

  return (
    <>
      <Box
        width="100%"
        textAlign="center"
        fontWeight="bold"
        bg={colors.bright}
        borderRadius="md"
        padding="5px"
        ml="4"
        cursor="pointer"
        _hover={{ bg: "gray.300" }}
        onClick={() => {
          setOverlay(<Overlay />);
          onOpen();
        }}
        {...unstyledStyleProps}
      >
        {children}
      </Box>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>{body}</ModalBody>

          <ModalFooter>
            <Box
              bg={colors.bright}
              borderRadius="md"
              padding="7px"
              cursor="pointer"
              _hover={{ bg: "gray.300" }}
              onClick={onClose}
            >
              Close
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
