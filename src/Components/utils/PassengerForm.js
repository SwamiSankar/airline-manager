import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "semantic-ui-react";
import { axiosRequest } from "../../apis/apis";
import * as Yup from "yup";

const PassengerForm = ({ slot, seat, closeModal, checkinEnabled }) => {
  const initialValues = {
    name: "",
    age: "",
    slot: slot,
    seat: seat,
    preference: "",
    ancillary: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    age: Yup.string()
      .required("Age is Required")
      .matches(/^[0-9]+$/),
  });
  const onSubmit = (values) => {
    axiosRequest
      .post("/passenger_list", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    closeModal();
    checkinEnabled(seat);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ touched, errors, isValid }) => {
        return (
          <div className="passenger-form-container">
            <div className="passenger-form-wrapper">
              <Form className="form-container">
                <div className="form-group passenger-name">
                  <label htmlFor="name">Name</label>
                  <Field type="text" className={"form-control"} name="name" />
                  {touched.name && errors.name && (
                    <div className="login-form-error">{errors.name}</div>
                  )}
                </div>
                <div className="form-group passenger-age">
                  <label htmlFor="age">Age</label>
                  <Field type="text" className={"form-control"} name="age" />
                  {touched.age && errors.age && (
                    <div className="login-form-error">{errors.age}</div>
                  )}
                </div>
                <div className="form-group flight-slot">
                  <label htmlFor="slot">Slot</label>
                  <Field
                    type="text"
                    id="slot"
                    className={"form-control"}
                    readOnly
                    name="slot"
                  />
                </div>
                <div className="form-group seat-number">
                  <label htmlFor="seat">Seat</label>
                  <Field
                    type="text"
                    id="seat"
                    className={"form-control"}
                    readOnly
                    name="seat"
                  />
                </div>
                <div className="form-group preference">
                  <div id="my-radio-group" style={{ paddingBottom: "10px" }}>
                    Meal Preference
                  </div>
                  <div
                    role="group"
                    aria-labelledby="my-radio-group"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <label>
                      <Field type="radio" name="preference" value="veg" />
                      Veg
                    </label>
                    <label>
                      <Field type="radio" name="preference" value="non-veg" />
                      Non-Veg
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="preference"
                        value="no preference"
                      />
                      No Preference
                    </label>
                  </div>
                </div>

                <div className="form-group ancillary">
                  <label>
                    <Field type="checkbox" name="ancillary" />
                    Ancillary Service
                  </label>
                </div>

                <Button
                  type="submit"
                  content="Submit"
                  labelPosition="right"
                  icon="checkmark"
                  disabled={!isValid}
                  positive
                />
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default PassengerForm;
