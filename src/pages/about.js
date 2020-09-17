import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About Us</h1>
        <p>Everything you need to know about our organization.</p>
      </Layout>
    </div>
  )
}

export default AboutPage
