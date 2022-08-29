import React from 'react'
import { FaUserAlt, FaEnvelope, FaPhone, FaStarOfLife } from 'react-icons/fa'

import styles from './styles/contact-form.module.css'

const ContactForm = () => {
  return (
    <form 
      method="post"
      action="/success"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="Justin Spegele Web Contact"
      className={styles.form}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Justin Spegele Web Contact" />
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
          <span className={`${styles.icon} ${styles.isRight} ${styles.isRequired}`}>
            <FaStarOfLife />
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
          <span className={`${styles.icon} ${styles.isRight} ${styles.isRequired}`}>
            <FaStarOfLife />
          </span>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="Phone">
          Phone
        </label>
        <div className={`${styles.control} ${styles.hasIconsLeft}`}>
          <input
            className={styles.input}
            type="text"
            name="Phone"
          />
          <span className={`${styles.icon} ${styles.isLeft}`}>
            <FaPhone />
          </span>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="Preferred Contact Method">
          Preferred contact method
        </label>
        <div className={styles.control}>
          <label className={styles.radio}>
            <input
              type="radio"
              name="Preferred Contact Method"
              value="Email"
              checked
            />
            Email
          </label>
          <label className={styles.radio}>
            <input
              type="radio"
              name="Preferred Contact Method"
              value="Phone"
            />
            Phone
          </label>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="Project Type">
          What can I help you with?
        </label>
        <div className={styles.control}>
          <div className={styles.select}>
            <select name="Project Type">
              <option disabled selected> -- select an option -- </option>
              <option>Update my existing website</option>
              <option>Build a new website</option>
              <option>Build a new website w/eCommerce</option>
              <option>Develop a business app</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="Project Details">
          Tell me a bit about your project
        </label>
        <div className={styles.control}>
          <textarea className={styles.textarea} name="Project Details"></textarea>
        </div>
      </div>
      {/* <div className={styles.field}>
        <div className={styles.control}>
          <label className={styles.checkbox}>
            <input type="checkbox" />
            I have read and agree to the <a href="#">privacy policy</a>
          </label>
        </div>
      </div> */}
      <div className="field is-grouped">
        <div className={styles.control}>
          <button className={styles.button}>Submit</button>
        </div>
      </div>
    </form>
  )
}
 
export default ContactForm
