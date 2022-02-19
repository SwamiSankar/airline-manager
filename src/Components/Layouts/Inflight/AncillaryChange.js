import React from "react";
import { Checkbox, Form } from "semantic-ui-react";

const AncillaryChange = ({ ancValue, changeToggleValue }) => {
  return (
    <Form inverted>
      <Form.Field>
        <Checkbox
          toggle
          label="Ancillary Service"
          checked={ancValue === true}
          value={ancValue}
          onChange={(e, data) => {
            console.log("Into the Method");
            changeToggleValue(!data.value);
          }}
        />
      </Form.Field>
    </Form>
  );
};

export default AncillaryChange;
