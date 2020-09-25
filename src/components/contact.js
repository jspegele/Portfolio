import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

import Container from './container'

import contactStyles from './styles/contact.module.scss'

const Contact = () => {
  return (
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
          <li>
            <FaPhone size="1.8rem" />
            +1 631 521 1659
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Contact
