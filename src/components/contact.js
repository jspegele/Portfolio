import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

import Container from './container'
import ContactForm from './contact-form'

import contactStyles from './styles/contact.module.css'

const Contact = () => {
  return (
    <div className={contactStyles.contactWrapper}>
      <Container>
        <div className={contactStyles.contact} id="contact">
          <div className={contactStyles.header}>
            <h2>Contact</h2>
            <div className={contactStyles.hr}></div>
          </div>
          <p>
            Interested in pricing a small business website, personal portfolio or blog? Let's talk.
          </p>
          <ul>
            <li>
              <FaEnvelope size="1.8rem" />
              <a href="mailto:hello@justinspegele.com?subject=Website Inquiry">hello@justinspegele.com</a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </Container>
    </div>
  )
}

export default Contact
