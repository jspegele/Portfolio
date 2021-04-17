import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import Container from './container'

import heroStyles from './styles/hero.module.scss'
import buttonStyles from './styles/buttons.module.scss'
import heroBg from '../images/hero-bg.png'

const Hero = () => (
  <div className={heroStyles.heroWrapper}>
    <Container>
      <section className={heroStyles.hero} id="top">
        <div className={heroStyles.spacer}></div>
        <div className={heroStyles.heroBody}>
          <h1 className={heroStyles.title}>Hi, I'm Justin Spegele</h1>
          <h2 className={heroStyles.subtitle}>I'm a full-stack web developer, UX researcher, and digital PM</h2>
          <div className={heroStyles.cta}>
            <a className={buttonStyles.buttonHero} href="#about">
              See how I can help you <FaArrowRight size="1.6rem" />
            </a>
          </div>
        </div>
        <div className={heroStyles.heroFooter}>
          <img src={heroBg} alt="" />
        </div>
      </section>
    </Container>
  </div>
)

export default Hero
