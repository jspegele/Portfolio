import React from 'react'
import { FaUserAlt, FaEnvelope } from 'react-icons/fa'

import styles from './styles/starter-promo-form.module.scss'

const StarterPromoForm = () => {
  return (
    <div className={styles.heroForm}>
      <form 
        method="post"
        action="/success"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="Starter Site Promo Form"
        className={styles.form}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="Starter Site Promo Form" />
        <h2>Let's Talk</h2>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="Name">
            Name
          </label>
          <div className={`${styles.control} ${styles.hasIconsLeft} ${styles.hasIconsRight}`}>
            <input
              className={styles.input}
              type="text"
              name="Name"
              required
            />
            <span className={`${styles.icon} ${styles.isLeft}`}>
              <FaUserAlt />
            </span>
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="Email">
            Email
          </label>
          <div className={`${styles.control} ${styles.hasIconsLeft} ${styles.hasIconsRight}`}>
            <input
              className={styles.input}
              type="email"
              name="Email"
              required
            />
            <span className={`${styles.icon} ${styles.isLeft}`}>
              <FaEnvelope />
            </span>
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="Project Details">
            Tell me a bit about your business
          </label>
          <div className={styles.control}>
            <textarea className={styles.textarea} name="Project Details"></textarea>
          </div>
        </div>
        <div className="field is-grouped">
          <div className={styles.control}>
            <button className={styles.button}>Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}
 
export default StarterPromoForm
