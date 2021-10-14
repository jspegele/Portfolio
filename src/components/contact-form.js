import React from 'react'

import styles from './styles/contact-form.module.scss'

const ContactForm = () => {
  return (
    <form 
      method="post"
      action="/success"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="Web Contact Form"
      className={styles.form}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Parasky Flute Studios Contact" />
      <div className={styles.field}>
        <label className={styles.label}>Name</label>
        <div className={`${styles.control} ${styles.hasIconsLeft}`}>
          <input className={styles.input} type="text" name="Name" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <div className={`${styles.control} ${styles.hasIconsLeft}`}>
          <input className={styles.input} type="email" name="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Phone</label>
        <div className={`${styles.control} ${styles.hasIconsLeft}`}>
          <input className={styles.input} type="text" name="Phone" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Preferred contact method</label>
        <div className={styles.control}>
          <label className={styles.radio}>
            <input type="radio" name="Preferred Contact Method" />
            Email
          </label>
          <label className={styles.radio}>
            <input type="radio" name="Preferred Contact Method" />
            Phone
          </label>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>What can I help you with?</label>
        <div className={styles.control}>
          <div className={styles.select}>
            <select name="Project Type">
              <option disabled></option>
              <option>Update myexisting website</option>
              <option>Build a new website</option>
              <option>Build a new website w/eCommerce</option>
              <option>Develop a business app</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Tell me a bit about your project</label>
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
