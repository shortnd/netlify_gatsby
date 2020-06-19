import React from 'react'
import Layout from '../components/layout'

import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Contact() {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Please provide a valid email').required('Required')
        }),
        validateOnMount: true
    })
    return (
        <Layout>
            <h2>Contact</h2>
            <form data-netlify="true" name="contact">
                <input type="hidden" name="form-name" name="contact" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" {...formik.getFieldProps('email')} required />
                {(formik.touched.email && formik.errors.email) ? (
                    <>
                        {formik.errors.email}
                    </>
                ) : null}
                <button type="submit" disabled={!formik.isValid}>submit</button>
            </form>
        </Layout>
    )
}
