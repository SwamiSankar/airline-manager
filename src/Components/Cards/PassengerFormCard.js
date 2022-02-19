import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Modal } from "semantic-ui-react";
import { axiosRequest } from "../../apis/apis";
import * as Yup from "yup";
import PassengerForm from "../utils/PassengerForm";

const PassengerFormCard = ({ slot, seat }) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => {
        setOpen(true);
      }}
      open={open}
      trigger={
        <Button
          className="add-passenger-button"
          color="green"
          compact
          size="medium"
        >
          Enter Passenger Details
        </Button>
      }
    >
      <Modal.Header>Enter Passenger Details</Modal.Header>
      <Modal.Content>
        <PassengerForm slot={slot} seat={seat} closeModal={closeModal} />
      </Modal.Content>
    </Modal>
  );
};

export default PassengerFormCard;
