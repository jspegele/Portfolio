import React from 'react'

import styles from './styles/starter-promo-contact.module.scss'

import Container from '../../components/container'
import StarterPromoForm from './starter-promo-form'

const StarterPromoContact = () => {
  return (
    <section className={styles.contact} id="contact">
      <Container>
        <h2 className={styles.title}>
          Are you ready to let us build your professional website?
        </h2>
        <h3 className={styles.subtitle}>
          Contact Justin Spegele Today
        </h3>
        <StarterPromoForm />
      </Container>
    </section>
  )
}
 
export default StarterPromoContact
