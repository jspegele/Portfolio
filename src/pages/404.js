import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import Container from '../components/container'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <Container>
        <div style={{ 
          color: 'white',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 15+'rem',
          maxWidth: 30+'rem',
          textAlign: 'center'
        }}>
          <h1>Page not found</h1>
          <p style={{ marginTop: 2+'rem' }}>
            <Link to="/" style={{
              color: '#688ddf',
              fontSize: 2+'rem',
              textDecoration: 'none'
            }}>Head home</Link>
            </p>
        </div>
      </Container>
    </Layout>
  )
}

export default NotFound
