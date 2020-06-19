import React from 'react'
import Layout from '../components/layout'

export default function Contact() {
    return (
        <Layout>
            <h2>Contact</h2>
            <form data-netlify="true" name="contact">
                <input type="hidden" name="form-name" name="contact" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <button type="submit">submit</button>
            </form>
        </Layout>
    )
}
