import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Error from "./Error";

const YupValidation = () => {
    //Formik is doing. onChange -> handleChange, onBlur -> handleBlur
    // useFormik is a hook
    const formik = useFormik({ 
        initialValues: {
          email: "",
          firstName: "",
          lastName: "",
        },
        validationSchema:Yup.object({
            // string()
            // max()
            // required()
            // min()
            // email()
            firstName: Yup.string().max(10, 'Must be 10 characters or less').required('required'),

            lastName: Yup.string().max(10, 'Must be 10 characters or less').required('required'),

            email: Yup.string().email(<Error />).required('required'),
        }),
        
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
        
      });
    return (
        <div>
        <h1>with (Yup validation )</h1>
      {/* submission function (onSubmit) */}
      <form onSubmit={formik.handleSubmit}>  
        <label htmlFor="email">email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
       
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
{/* 

1) handleSubmit: A submission handler
2) handleChange: A change handler to pass to each <input>, <select>, or <textarea>
3) values: Our form’s current values 

*/}
        <br />
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
         
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        <br />
        <button type="submit">Submit</button>
      </form>
        </div>
    );
};

export default YupValidation;