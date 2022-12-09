import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import Container from '../components/container'

import styles from "./styles/404.module.css"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <Container>
        <div className={styles.notfoundWrapper}>
          <h1>Page not found</h1>
          <p style={{ marginTop: 2+'rem' }}>
            <Link to="/" className={styles.homeLink}>Head home</Link>
            </p>
        </div>
      </Container>
    </Layout>
  )
}

export default NotFound
