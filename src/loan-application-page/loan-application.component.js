import React from "react";
import * as singleSpa from 'single-spa'
import * as api from '../utils/api.js';
import * as Yup from 'yup';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

export default function LoanAppPage(props) {
  console.log('*** here???')
  const [count, setCount] = useState();

  return (
    <div>
      <h1>Basic Loan App</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNubmer: '',
        }}
        // validationSchema={Yup.object().shape({
        //   firstName: Yup.string()
        //     .required('First Name is required'),
        //   lastName: Yup.string()
        //     .required('Last Name is required'),
        //   email: Yup.string()
        //     .email('Email is invalid')
        //     .required('Email is required'),
        //   phoneNubmer: Yup.string()
        //     .required('Phone number is required'),
        // })}
        onSubmit={(
          values,
          { setSubmitting },
        ) => {
          console.log('** values: ?', values)
          // maybe we do the on submit validation + err check here?
          api.submitApp(values);
          singleSpa.navigateToUrl('/success');
        }}
      >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         isSubmitting,
         /* and other goodies */
       }) => (
         <Form>
          <label htmlFor="firstName">First Name</label>
          <Field
            type="firstName"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName && errors.firstName}
          <label htmlFor="lastName">Last Name</label>
          <Field
            type="lastName"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName && errors.lastName}
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <label htmlFor="phoneNumber">phoneNumber</label>
          <input
            type="phoneNumber"
            name="phoneNumber"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNumber}
          />
          {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
       )}
      </Formik>
    </div>
  );
}
