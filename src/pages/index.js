import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Contact from '../components/contact'
import Projects from '../components/projects'

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
