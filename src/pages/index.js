import React from 'react'
import { Link } from 'gatsby'

import indexStyles from './styles/index.module.scss'
import Head from '../components/head'
import Layout from '../components/layout'
import Container from '../components/container'
import justin from '../images/justin.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <Container>
        <div className={indexStyles.intro}>
          <div className={indexStyles.copy}>
            <h1 className={indexStyles.title}>Hi, I'm Justin Spegele.<br/>I'm a UI developer and user researcher.</h1>
            <p className={indexStyles.subtitle}>
              This site is where I showcase my projects, freelance work, case studies, and anything else I want to write 
              about. Check out my <Link to="/guides">tutorials and guides</Link> or <Link to="/about">learn more about me</Link>.
            </p>
          </div>
          <div className={indexStyles.image}>
            <img src={justin} alt="That's me!" />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
