import React from 'react'

import styles from './styles/starter-promo-pitch.module.css'

import Container from '../../components/container'

import landscapingTemplateImg from './images/landscaping-template.jpg'
import restaurantTemplateImg from './images/restaurant-template.jpg'
import legalTemplateImg from './images/legal-template.jpg'

const StarterPromoPitch = () => {
  return (
    <section className={styles.pitch}>
      <Container>
        <h2 className={styles.title}>
          Establish Your Online Presence
        </h2>
        <h3 className={styles.subtitle}>
          Whatever your business, I can help you establish an online presence with
          a fresh, modern design and mobile friendly interface opitmized for Google
          search rankings.
        </h3>
        <div className={styles.templates}>
          <div className={styles.template}>
            <h4>Landscapers, General Contracters, Painters &amp; more</h4>
            <p>
              Show off your recent jobs, share contact info, take online quote
              requests and capture sales leads.
            </p>
            <a
              href="https://landscaping.justinspegele.com/"
              className={styles.templateLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={landscapingTemplateImg} alt="" />
            </a>
          </div>
          <div className={styles.template}>
            <h4>Restaurants, Take-Out, Food Trucks &amp; more</h4>
            <p>
              Maintain an online menu, post promos and specials, link to your
              online ordering service.
            </p>
            <a
              href="https://pizzeria.justinspegele.com/"
              className={styles.templateLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={restaurantTemplateImg} alt="" />
            </a>
          </div>
          <div className={styles.template}>
            <h4>Legal Services, Financial Services &amp; more</h4>
            <p>
              Establish credibility, share client successes, capture new leads,
              and introduce your team.
            </p>
            <a
              href="https://law.justinspegele.com/"
              className={styles.templateLink}
              target="_blank"
              rel="noreferrer"
            >
              <img src={legalTemplateImg} alt="" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
 
export default StarterPromoPitch
