import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from "../components/head"

const Home = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Andy Hopkins Gatsby Demo Site</h1>
      <h3>Hi!</h3>
      <p>I'm Andy Hopkins, web developer!  This website was built with Gatsby and React, hosted on Github Pages, and the content is drawn from a lovely CMS called Contentful.  Check out the < Link to="/blog/bootcamp-complete"> Bootcamp Complete </Link> Blog post to see more about how this site was made.
I am currently seeking full-time or contract work in the web development field, so please < Link to="/contact"> contact me </Link> if you want to chat!</p>
    </Layout>
  )
}

export default Home