import { useFormik } from "formik";


function WithoutValidation() {
  const formik = useFormik({ // useFormik is a hook
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1>Anywhere in your app!</h1>
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
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WithoutValidation;
