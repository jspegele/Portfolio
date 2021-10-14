import React from "react"
import { Link } from "gatsby"
import { FaArrowRight } from "react-icons/fa"

import Layout from "../components/layout"
import Container from "../components/container"
import Head from "../components/head"

import styles from './styles/success.module.scss'

const SuccessPage = () => (
  <Layout>
    <Head title="Justin Spegele | Success" />
    <Container>
      <div className={styles.success}>
        <h1>Success!</h1>
        <p>
          Thank you for contacting me. I'll review your
          message and contact you asap.
        </p>
        <Link className={styles.buttonPrimary} to="/" style={{ alignSelf: 'center', marginTop: '2rem' }}>Head Home <FaArrowRight className="ml-4" /></Link>
      </div>
    </Container>
  </Layout>
)

export default SuccessPage
