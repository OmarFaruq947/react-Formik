import { ErrorMessage, Field, Form, Formik } from "formik";
import { React } from "react";
import * as Yup from "yup";
import Error from "./Error";

const GetFieldProps = () => {
  //Formik is doing. onChange -> handleChange, onBlur -> handleBlur
  // useFormik is a hook

  return (
    <div>
      <h1>Yup validation and use getFieldProps()</h1>
      {/* submission function (onSubmit) */}
      <Formik
        initialValues={{ email: "", firstName: "", lastName: "", message:"",}}
        validationSchema={Yup.object({
          // string()
          // max()
          // required()
          // min()
          // email()
          firstName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("required"),

          lastName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("required"),

          email: Yup.string()
            .email(<Error />)
            .required("required"),

          message: Yup.string()
          .max(250, "Must be 250 characters or less")
          .min(50, "Must be 50 characters")
          .required("required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {/* 
        The <Field> component by default will render an <input> component that, given a name prop, will implicitly grab the respective onChange, onBlur, value props 
        */}
        <Form onSubmit={Formik.handleSubmit}>
          <label htmlFor="email">email Address</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
          <br />
          <label htmlFor="firstName">First name</label>
          <Field type="text" name="firstName" />
          <ErrorMessage name="firstName" />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <Field type="text" name="lastName" />
          <ErrorMessage name="lastName" />
          <br />
          {/* <Field name="message" as="textarea" className="form-textarea" /> */}
          <label htmlFor="message">Message</label>
          <Field name="message" as="textarea" >Text aria</Field>
          <ErrorMessage name="message"/>
          <br />
          <Field name="colors" as="select">
            <option value="red">Red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="123">123</option>
          </Field>
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default GetFieldProps;
