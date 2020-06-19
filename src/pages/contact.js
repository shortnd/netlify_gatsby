import React from 'react'
import Layout from '../components/layout'
import SignUpForm from '../components/SignUpForm'

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
            <SignUpForm />
        </Layout>
    )
}
