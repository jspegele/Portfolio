import React from 'react'

import Container from '../../components/container'
import StarterPromoForm from './starter-promo-form'

import styles from './styles/starter-promo-hero.module.css'

const StarterPromoHero = () => {
  return (
    <section className={styles.heroWrapper}>
      <Container>
        <section className={styles.hero} id="top">
          <div className={styles.heroBody}>
            <div className={styles.heroTitle}>
              <h2 className={styles.subtitle}>Get Your Business Online Today</h2>
              <h1 className={styles.title}>One Page Starter Sites Beginning at $250</h1>
            </div>
            <StarterPromoForm />
          </div>
        </section>
      </Container>
    </section>
  )
}
 
export default StarterPromoHero
