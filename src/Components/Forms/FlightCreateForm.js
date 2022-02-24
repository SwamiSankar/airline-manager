import { Formik, Field, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { axiosRequest } from "../../apis/apis";
import { Button } from "semantic-ui-react";

const FlightCreateForm = ({ closeModal, flightCreated }) => {
  let id = null;
  const initialValues = {
    source: "",
    destination: "",
    sourcetime: "",
    destinationtime: "",
  };
  const validationSchema = Yup.object({
    source: Yup.string()
      .required("Source City is Required")
      .matches(
        /^[a-zA-Z]*$/,
        "Source Location must not contain numbers or special Characters"
      ),
    destination: Yup.string()
      .required("Destionation City is Required")
      .matches(
        /^[a-zA-Z]*$/,
        "Destination Location must not contain numbers or special Characters"
      ),
    sourcetime: Yup.string()
      .required("Source Time is Required")
      .matches(/^[0-9]{4}$/, "Please enter source time in correct format"),
    destinationtime: Yup.string()
      .required("Destination Time is Required")
      .matches(/^[0-9]{4}$/, "Please enter destination time in correct format"),
  });

  const onSubmit = (values) => {
    axiosRequest
      .post("/flight_details", values)
      .then((response) => {
        console.log(response);
        id = response.data.id;
        flightCreated(id);
      })
      .catch((error) => {
        console.log(error);
      });
    closeModal();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ touched, errors, isValid }) => {
        return (
          <div className="edit-form-container">
            <div className="edit-form-wrapper">
              <Form className="form-container">
                <div className="form-group source">
                  <label htmlFor="source">Source</label>
                  <Field type="text" className={"form-control"} name="source" />
                  {touched.source && errors.source && (
                    <div className="login-form-error">{errors.source}</div>
                  )}
                </div>
                <div className="form-group destination">
                  <label htmlFor="destination">Destination</label>
                  <Field
                    type="text"
                    className={"form-control"}
                    name="destination"
                  />
                  {touched.destination && errors.destination && (
                    <div className="login-form-error">{errors.destination}</div>
                  )}
                </div>
                <div className="form-group sourcetime">
                  <label htmlFor="sourcetime">Source Time</label>
                  <Field
                    type="text"
                    className={"form-control"}
                    name="sourcetime"
                  />
                  {touched.sourcetime && errors.sourcetime && (
                    <div className="login-form-error">{errors.sourcetime}</div>
                  )}
                </div>
                <div className="form-group destinationtime">
                  <label htmlFor="destinationtime">Destination Time</label>
                  <Field
                    type="text"
                    className={"form-control"}
                    name="destinationtime"
                  />
                  {touched.destinationtime && errors.destinationtime && (
                    <div className="login-form-error">
                      {errors.destinationtime}
                    </div>
                  )}
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

export default FlightCreateForm;
