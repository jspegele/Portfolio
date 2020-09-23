import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <Hero />
      <About />
    </Layout>
  )
}

export default IndexPage
