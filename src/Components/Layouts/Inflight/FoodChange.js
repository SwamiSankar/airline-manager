import React, { useState } from "react";
import { Checkbox, Form } from "semantic-ui-react";

const FoodChange = ({ foodValue, changeFoodPreference }) => {
  return (
    <Form inverted>
      <Form.Field>
        <Checkbox
          radio
          label="Veg"
          name="checkboxRadioGroup"
          value="veg"
          checked={foodValue === "veg"}
          onChange={(e, data) => {
            //setValue(data.value);
            changeFoodPreference(data.value);
          }}
        />
      </Form.Field>

      <Form.Field>
        <Checkbox
          radio
          label="Non-Veg"
          name="checkboxRadioGroup"
          value="non-veg"
          checked={foodValue === "non-veg"}
          onChange={(e, data) => changeFoodPreference(data.value)}
        />
      </Form.Field>

      <Form.Field>
        <Checkbox
          radio
          label="No Preference"
          name="checkboxRadioGroup"
          value="no preference"
          checked={foodValue === "no preference"}
          onChange={(e, data) => changeFoodPreference(data.value)}
        />
      </Form.Field>
    </Form>
  );
};

export default FoodChange;
