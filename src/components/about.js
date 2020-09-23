import React from 'react'
import { FaCode, FaFlask, FaTasks } from 'react-icons/fa'

import Container from './container'

import aboutStyles from './styles/about.module.scss'

const About = () => (
  <div className={aboutStyles.aboutWrapper}>
    <Container>
      <section className={aboutStyles.about} id="about">
        <div className={aboutStyles.overview}>
          I am a UX-focused developer and project manager who has led projects focused on highly usable, engaging and effective websites and applications built with UX best practices and modern development frameworks to deliver exciting and memorable customer experiences.
        </div>
        <div className={aboutStyles.roles}>
          <div className={aboutStyles.role}>
            <div className={aboutStyles.icon}><FaCode size="3.2rem" /></div>
            <div className={aboutStyles.title}>UI Development</div>
            <div className={aboutStyles.info}>Designing and deploying features, components, and full sites using modern development frameworks and best practices to meet business needs.</div>
          </div>
          <div className={aboutStyles.role}>
            <div className={aboutStyles.icon}><FaFlask size="3.2rem" /></div>
            <div className={aboutStyles.title}>UX Research</div>
            <div className={aboutStyles.info}>Gathering information from users through qualitative and quantitative research methods to understand their needs, wants and paint points.</div>
          </div>
          <div className={aboutStyles.role}>
            <div className={aboutStyles.icon}><FaTasks size="3.2rem" /></div>
            <div className={aboutStyles.title}>Project Management</div>
            <div className={aboutStyles.info}>Managing digital projects from requirements gathering to deployment, ensuring development projects are completed on-time and on-budget while delighting users and meeting business needs.</div>
          </div>
        </div>
      </section>
    </Container>
  </div>
)

export default About