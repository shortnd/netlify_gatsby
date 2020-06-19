import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <form method="post" netifly-form="true" name="form-test" action="/success">
      <label htmlFor="firstName">
        First Name
        <input type="text" name="firstName" id="firstName" placeholder="First Name" required/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </Layout>
)

export default IndexPage
