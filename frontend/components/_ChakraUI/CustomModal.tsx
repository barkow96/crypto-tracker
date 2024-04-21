import {
  Button,
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
    ? { variant: "unstyled", marginLeft: 0, fontWeight: "normal" }
    : undefined;

  return (
    <>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<Overlay />);
          onOpen();
        }}
        {...unstyledStyleProps}
      >
        {children}
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>{body}</ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
