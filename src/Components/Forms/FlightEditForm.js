import { Formik, Form, Field } from "formik";
import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import * as Yup from "yup";
import { axiosRequest } from "../../apis/apis";
import { AppContext } from "../../App";

const FlightEditForm = ({
  source,
  destination,
  sourcetime,
  destinationtime,
  id,
  closeModal,
}) => {
  const initialValues = {
    source: source,
    destination: destination,
    sourcetime: sourcetime,
    destinationtime: destinationtime,
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

  const { dispatch } = useContext(AppContext);

  const handleSelect = () => {
    const element = document.querySelector('input[name="sourcetime"]');
    if (element.value != sourcetime) {
      dispatch({
        type: "UPDATE_SLOT",
        data: {
          oldSlot: sourcetime,
          newSlot: element.value,
        },
      });
    }
  };

  const onSubmit = (values) => {
    axiosRequest
      .put(`/flight_details_update/${id}`, values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    handleSelect();
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
          <div className="edit-form-container" id={id}>
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

export default FlightEditForm;
