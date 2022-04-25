import React, { useContext } from "react";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { axiosRequest } from "../../apis/apis";
import { AppContext } from "../../App";

const Login = () => {
  let db_object = {};
  const { dispatch } = useContext(AppContext);

  const setLoginToken = () => {
    dispatch({ type: "UPDATE_LOGIN", data: true });
  };
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email Required"),
    password: Yup.string().required("Password Required"),
  });

  const onSubmit = (values) => {
    axiosRequest
      .get("/users")
      .then((response) => {
        db_object = response.data[0];
        if (
      db_object.email.includes(values.email) &&
      db_object.password.includes(values.password)
    ) {
      console.log("It's Correct");
      setLoginToken();
    } else {
      alert("Incorrect Credentials");
    }
      })
      .catch((error) => {
        console.log(error);
      });
  
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ touched, errors, isValid }) => {
        return (
          <div className="login-container">
            <div className="login-wrapper">
              <h2>Login Page</h2>
              <Form className="form-container">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="text" name="email" className={"form-control"} />
                  {touched.email && errors.email && (
                    <div className="login-form-error">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className={"form-control"}
                  />
                  {touched.password && errors.password && (
                    <div className="login-form-error">{errors.password}</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!isValid}
                >
                  Login
                </button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
