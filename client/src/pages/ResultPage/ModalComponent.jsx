import React, { useState } from "react";
import Modal from "react-modal";
import { Button, Typography } from "@mui/material";
const ModalComponent = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={openModal}>
        <Typography fontFamily={"--secondary-font"}>{title}</Typography>
      </Button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <Typography fontFamily={"--secondary-font"}>{title}</Typography>
        <Typography fontFamily={"--secondary-font"}>{content}</Typography>
        <Button variant="outlined" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal>
    </>
  );
};

export default ModalComponent;
