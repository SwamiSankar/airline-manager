import React, { useState } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import FlightEditForm from "../Forms/FlightEditForm";

const FlightEditModal = ({
  id,
  source,
  destination,
  sourcetime,
  destinationtime,
}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Modal
      id={id}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button color="blue">
          <Icon name="edit" />
          Edit
        </Button>
      }
    >
      <Modal.Header>Edit Flight Details</Modal.Header>
      <Modal.Content>
        <FlightEditForm
          source={source}
          destination={destination}
          sourcetime={sourcetime}
          destinationtime={destinationtime}
          closeModal={closeModal}
          id={id}
        />
      </Modal.Content>
    </Modal>
  );
};

export default FlightEditModal;
