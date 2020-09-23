import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

import Container from './container'

import heroStyles from './styles/hero.module.scss'
import profilePic from '../images/profile-pic.png'

const Hero = () => (
  <div className={heroStyles.heroWrapper}>
    <div className={heroStyles.overlay}>
      <Container>
        <section className={heroStyles.hero} id="top">
          <img src={profilePic} alt="Justin" />
          <h1 className={heroStyles.title}>I'm Justin Spegele</h1>
          <div className={heroStyles.tagline}>
            <p>
              I'm a web developer, user experience researcher, and digital project manager 
              helping small companies and large enterprises on their digital journeys.
            </p>
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
        </section>
      </Container>
    </div>
  </div>
)

export default Hero