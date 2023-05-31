import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Text } from "@chakra-ui/react";
import React from "react";
import HyperUIButton from "./HyperUIButton";
import ReglementInterieur from "../utils/ReglementInterieur";
import { WarningIcon } from "@chakra-ui/icons";

export default function ModalAlert() {
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />;

  const OverlayTwo = () => <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <HyperUIButton
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        <WarningIcon boxSize={"6"} />
        <span>Lire le règlement intérieur de Finest Lash Studio</span>
      </HyperUIButton>

      <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>RÈGLEMENT DE L'ÉTABLISSEMENT</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ReglementInterieur />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>J'ai compris</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
