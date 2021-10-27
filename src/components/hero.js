import React from 'react'

import Container from './container'

import heroStyles from './styles/hero.module.scss'
import buttonStyles from './styles/buttons.module.scss'

const Hero = () => (
  <div className={heroStyles.heroWrapper}>
    <Container>
      <section className={heroStyles.hero} id="top">
        <div className={heroStyles.spacer}></div>
        <div className={heroStyles.heroBody}>
          <h1 className={heroStyles.title}>Hi, I'm Justin Spegele</h1>
          <h2 className={heroStyles.subtitle}>I create unique websites for online businesses. Let's build something together.</h2>
          <div className={heroStyles.cta}>
            <a className={buttonStyles.buttonHero} href="#contact">
              Get a Free Proposal
            </a>
            <a className={buttonStyles.buttonHeroSecondary} href="#services">
              View My Services
            </a>
          </div>
        </div>
      </section>
    </Container>
  </div>
)

export default Hero
