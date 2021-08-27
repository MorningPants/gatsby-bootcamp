import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from "../components/head"

const Home = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Andy Hopkins Gatsby Demo Site</h1>
      <h2>Andy has crated this website</h2>
      <p>Need a developer? <a href="/contact">Contact Me</a></p>
      <p>or try the <Link to="/contact">React Link Type</Link></p>
    </Layout>
  )
}

export default Home