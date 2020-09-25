import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Contact from '../components/contact'

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <Hero />
      <About />
      <Contact />
    </Layout>
  )
}

export default IndexPage
