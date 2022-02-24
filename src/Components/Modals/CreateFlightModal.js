import React, { useState } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import FlightCreateForm from "../Forms/FlightCreateForm";

const CreateFlightModal = ({ flightCreated }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button floated="right" icon labelPosition="left" primary size="small">
          <Icon name="user" /> Add Flight
        </Button>
      }
    >
      <Modal.Header>Create Flight</Modal.Header>
      <Modal.Content>
        <FlightCreateForm
          closeModal={closeModal}
          flightCreated={flightCreated}
        />
      </Modal.Content>
    </Modal>
  );
};

export default CreateFlightModal;
