import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <form method="post" data-netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field" name="form-test" action="/success">
        <p class="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
      <label htmlFor="firstName">
        First Name
        <input type="text" name="firstName" id="firstName" placeholder="First Name" required/>
      </label>
        <div data-netlify-recaptcha="true"></div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </Layout>
)

export default IndexPage
