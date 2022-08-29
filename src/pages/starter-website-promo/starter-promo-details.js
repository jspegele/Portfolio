import React from 'react'
import { FaCheckCircle, FaGoogle, FaExpandArrowsAlt, FaMailBulk } from 'react-icons/fa'

import styles from './styles/starter-promo-details.module.css'

import Container from '../../components/container'

const StarterPromoDetails = () => {
  return (
    <section className={styles.details}>
      <Container>
        <h2 className={styles.title}>
          Why does your business need a website?
        </h2>
        <h3 className={styles.subtitle}>
          Social media is a great way to advertise your business, but a professional
          website establishes credibility and trust with potential customers, and is
          the best way to showcase your business online.
        </h3>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.tile}>
              <FaCheckCircle className={styles.icon} />
              <h4>Establish Credibility</h4>
              <p>
                A professional website in addition to social media establishes
                credability and legitmacy with potential customers.
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.tile}>
              <FaGoogle className={styles.icon} />
              <h4>Own Your Brand</h4>
              <p>
              Social media pages restrict you to showcasing your business according to
              their methods. Their algorithms and rules change and their brand is more
              prominent than yours. Your websites is yours, though, and we'll customize
              it to fit your needs exactly.
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.tile}>
              <FaExpandArrowsAlt className={styles.icon} />
              <h4>Better Search Ranking</h4>
              <p>
                Google ranks dedicated websites higher than Facebook and other social
                pages. Get ahead of your competition.
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.tile}>
              <FaMailBulk className={styles.icon} />
              <h4>Grow With Your Market</h4>
              <p>
                Our starters sites get you up and running quickly, but are also built
                to grow with your business. Add ecommerce, blogs, forms, galleries,
                and more...when you're ready.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
 
export default StarterPromoDetails
