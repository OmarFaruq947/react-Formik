# connect()

1. connect() is a higher-order component (HoC)
2. It is used internally to construct <Field> and <Form>

# ErrorMessage

<ErrorMessage /> is a component that renders the error message of a given field if that field has been visited (i.e.touched[name] === true) (and there is an error message present). It expects that all error messages are stored for a given field as a string. Like <Field />, <FastField />, and <FieldArray />, lodash-like dot path and bracket syntax is supported.

# Field

<Field /> will automagically hook up inputs to Formik. It uses the name attribute to match up with Formik state. <Field /> will default to an HTML <input /> element.

# FieldArray

<FieldArray /> is a component that helps with common array/list manipulations. You pass it a name property with the path to the key within values that holds the relevant array. <FieldArray /> will then give you access to array helper methods via render props. For convenience, calling these methods will trigger validation and also manage touched for you.

# Form

Form is a small wrapper around an HTML <form> element that automatically hooks into Formik's handleSubmit and handleReset. All other props are passed directly through to the DOM node.

# Formik

<Formik> is a component that helps you with building forms. It uses a render props pattern made popular by libraries like React Motion and React Router.

# useField()

useField is a custom React hook that will automagically help you hook up inputs to Formik. You can and should use it to build your own custom input primitives. There are 2 ways to use it.

# useFormik()

useFormik() is a custom React hook that will return all Formik state and helpers directly. Despite its name, it is not meant for the majority of use cases. Internally, Formik uses useFormik to create the <Formik> component (which renders a React Context Provider). If you are trying to access Formik state via context, use useFormikContext. Only use this hook if you are NOT using <Formik> or withFormik.

\*\* Be aware that <Field>, <FastField>, <ErrorMessage>, connect(), and <FieldArray> will NOT work with useFormik() as they all require React Context.

# useFormikContext()

useFormikContext() is a custom React hook that will return all Formik state and helpers via React Context.

# withFormik()

Create a higher-order React component class that passes props and form handlers (the "FormikBag") into your component derived from supplied options.
