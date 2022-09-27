import { useFormik } from "formik";
import React from 'react';

const validate = values =>{
    const errors = {};
    if (!values.firstName) {
        errors.firstName='Required';
    } else if(values.firstName.length > 15){
        errors.firstName = 'Must be 15 characters or less';
    }


    if (!values.lastName) {
        errors.lastName='Required';
    } else if(values.lastName.length > 20){
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email='Required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
    }

    return errors;
}


const WithValidation = () => {
    const formik = useFormik({ // useFormik is a hook
        initialValues: {
          email: "",
          firstName: "",
          lastName: "",
        },
        validate,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
        
      });
    return (
        <div>
            <h1>with (Manual validation )</h1>
      {/* submission function (onSubmit) */}
      <form onSubmit={formik.handleSubmit}>  
        <label htmlFor="email">email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
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
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        <br />
        <button type="submit">Submit</button>
      </form>
        </div>
    );
};

export default WithValidation;