import React from "react"
import * as Yup from "yup"
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik"

const SignUpForm = () => {
  const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      business: false,
      currentProvider: "",
      currentSpeed: "",
      computers: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Minimum amount of charaters is 2")
        .max(20, "Max amount of charaters is 20")
        .required("Required"),
      lastName: Yup.string()
        .min(2, "Minimum amount of charaters is 2")
        .max(30, "Max amount of charaters is 30")
        .required("Required"),
      email: Yup.string()
        .email("Please provide a valid email address")
        .required("Required"),
      phoneNumber: Yup.string()
        .matches(phoneRegex, "Please provide a valid phone number")
        .required("Required"),
      address: Yup.string().required(),
      business: Yup.boolean(),
      currentProvider: Yup.string(),
      currentSpeed: Yup.string(),
      computers: Yup.boolean(),
    }),
  })
  return (
    <form method="POST" data-netlify="true" name="sign-up">
      <input type="hidden" name="form-name" value="sign-up" />
      <div>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            {...formik.getFieldProps("firstName")}
          />
        </label>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
      </div>
      {/* <div>
        <label htmlFor="lastName">
          Last Name
          <Field type="text" name="lastName" id="lastName" />
        </label>
        <ErrorMessage name="lastName" />
      </div>
      <div>
        <label htmlFor="email">
          Email
          <Field type="email" name="email" id="email" />
        </label>
        <ErrorMessage name="email" />
      </div>
      <div>
        <label htmlFor="phoneNumber">
          Phone Number
          <Field type="text" name="phoneNumber" id="phoneNumber" />
        </label>
        <ErrorMessage name="phoneNumber" />
      </div>
      <div>
        <label htmlFor="addressOne">
          Street Address
          <Field type="text" name="addressOne" id="addressOne" />
        </label>
        <ErrorMessage name="addressOne" />
      </div>
      <div>
        <label htmlFor="addressTwo">
          Addresss (2nd)
          <Field type="text" name="addressTwo" id="addressTwo" />
        </label>
        <ErrorMessage name="addressTwo" />
      </div>
      <div>
        <label htmlFor="business">
          Business
          <Field type="checkbox" name="business" id="business" />
        </label>
        <ErrorMessage name="business" />
      </div>
      <div>
        <label htmlFor="city">
          City
          <Field type="text" name="city" id="city" />
        </label>
        <ErrorMessage name="city" />
      </div>
      <div>
        <label htmlFor="state">
          State
          <Field type="text" name="state" id="state" />
        </label>
        <ErrorMessage name="state" />
      </div>
      <div>
        <label htmlFor="currentProvider">
          Current Provider
          <Field type="text" name="currentProvider" id="currentProvider" />
        </label>
        <ErrorMessage name="currentProvider" />
      </div>
      <div>
        <label htmlFor="currentSpeed">
          Current Speed
          <Field type="text" name="currentSpeed" id="currentSpeed" />
        </label>
        <ErrorMessage name="currentSpeed" />
      </div>
      <div>
        <label htmlFor="computers">
          Computers
          <Field type="checkbox" name="computers" id="computers" />
        </label>
        <ErrorMessage name="computers" />
      </div> */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default SignUpForm
