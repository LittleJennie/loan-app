import React from "react";
import * as api from '../utils/api.js';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

export default function LoanAppPage(props) {
  console.log('*** here???')
  const initialState = {
    count: 0
  };

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
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required('First Name is required'),
          lastName: Yup.string()
            .required('Last Name is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          phoneNubmer: Yup.string()
            .required('Phone number is required'),
        })}
        onSubmit={(
          values,
        ) => {
          // maybe we do the on submit validation + err check here?
          api.submitApp(values);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <Field
            id="phoneNumber"
            name="phoneNumber"
            placeholder="888-888-8888"
            type="phoneNumber"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
