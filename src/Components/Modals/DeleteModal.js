import React, { useState } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import { deleteFlight } from "../utils/deleteFlight";

const DeleteModal = ({ id, slot, flightDeleted }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button color="red">
          <Icon name="trash" />
          Delete
        </Button>
      }
    >
      <Modal.Header>Delete Prompt</Modal.Header>
      <Modal.Content>
        <p>
          Are you sure to delete the flight ? This will delete all the
          passengers associated with the flight
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Confirm"
          labelPosition="right"
          icon="trash"
          onClick={() => {
            deleteFlight(id, slot);
            setOpen(false);
            flightDeleted(id);
          }}
          negative
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteModal;
