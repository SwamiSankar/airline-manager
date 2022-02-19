import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const Login = ({ touched, errors }) => {
  return (
    <React.Fragment>
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

const LoginFormik = withFormik({
  mapPropsToValues: (props) => {
    return {
      email: props.email || "",
      password: props.password || "",
    };
  },
  handleSubmit: (values) => {
    console.log(values);
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email Required"),
    password: Yup.string().required("Password Required"),
  }),
  handleSubmit: (values) => {
    const REST_API_URL = "http://localhost:3000/users";
    console.log("API is gonna be fetched");
    fetch(REST_API_URL, {
      method: "post",
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          console.log(response);
          // HANDLE ERROR
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        // HANDLE RESPONSE DATA
        console.log(data);
      })
      .catch((error) => {
        // HANDLE ERROR
        console.log(error);
      });
  },
})(Login);

export default LoginFormik;
