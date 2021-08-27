import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"


const About = () => {
  return (
  <div>
    <Layout>
      <Head title="About"/>
    <h1>About Me</h1>
    <h2>Dad, Programmer, Massage Therapist</h2>
    <p>TODO: Write a bio!</p>
    <p><Link to="/contact">Contact me to hang out!</Link></p>

    
    </Layout>
  </div>
  )
}

export default About