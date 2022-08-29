import React from 'react'

import styles from './styles/starter-promo-banner.module.css'

import Container from '../../components/container'

const StarterPromoBanner = () => {
  return (
    <section className={styles.banner}>
      <Container>
        <h2 className={styles.title}>
          One Page Starter Webites Beginning at $250
        </h2>
        <h3 className={styles.subtitle}>
          Whatever your business, I can help you establish an online presence with
          a fresh, modern design and mobile friendly interface opitmized for Google
          search rankings.
        </h3>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>What You'll Get</h4>
            <p>
              We'll build you a site that is branded and customized for your business,
              with your content and only the sections your need.
            </p>
            <ul>
              <li>Low-cost single page websites</li>
              <li>Branded with your logo and colors</li>
              <li>Optimized for Google Search results</li>
              <li>Select from thousands of stock images</li>
              <li>Your own copy and images placed throughout</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Endless Options</h4>
            <p>
              Customize your site with the functionality you need right, and add new
              pages and funtionality down the road. Your site will be built to expand
              with you as your business grows.
            </p>
            <ul>
              <li>Additional Pages</li>
              <li>eCommerce solutions available</li>
              <li>Blog, Forms, Authentication</li>
              <li>Speak with a consultant about upgrading and improving when you're ready</li>
              <li>Low-cost hosting</li>
              <li>Maintenance plans</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
 
export default StarterPromoBanner
