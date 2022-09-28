# connect()

1. connect() is a higher-order component (HoC)
2. It is used internally to construct <Field> and <Form>

# <ErrorMessage />

<ErrorMessage /> is a component that renders the error message of a given field if that field has been visited (i.e.touched[name] === true) (and there is an error message present). It expects that all error messages are stored for a given field as a string. Like <Field />, <FastField />, and <FieldArray />, lodash-like dot path and bracket syntax is supported.
