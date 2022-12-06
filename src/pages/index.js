import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Services from '../components/services'
import RecentWork from '../components/recent-work'
import About from '../components/about'
import Contact from '../components/contact'

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <Hero />
      <Services />
      <RecentWork />
      <About />
      <Contact />
    </Layout>
  )
}

export default IndexPage
