import React from 'react'
import { FaEnvelope, FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

import Container from './container'

import footerStyles from './styles/footer.module.scss'
import resume from '../files/JustinSpegeleResume.pdf'

import imgLogo from '../images/js-logo.png'
import enterprise from '../files/JustinSpegelePDFPortfolio.pdf'

const Footer = ({ type }) => {
  return (
    <Container>
      <footer className={footerStyles.footer}>
        {type === 'full' && (
          <div className={footerStyles.links}>
            <a href="mailto:hello@justinspegele.com?subject=Hello Justin">
              <FaEnvelope size="1.8rem" />
              Say Hello
            </a>
            <a href="https://www.linkedin.com/in/justinspegele/" target="_blank" rel="noreferrer">
              <FaLinkedin size="1.8rem" />
              LinkedIn
            </a>
            <a href="https://github.com/jspegele" target="_blank" rel="noreferrer">
              <FaGithub size="1.8rem" />
              GitHub
            </a>
            <a href={resume} target="_blank" rel="noreferrer">
              <FaFileAlt size="1.8rem" />
              Resume
            </a>
            <a href={enterprise} target="_blank" rel="noreferrer">
              <FaFileAlt size="1.8rem" />
              Enterprise
            </a>
            {/* <a href="https://codepen.io/jspegele" target="_blank" rel="noreferrer">
              <FaCodepen size="1.8rem" />
              CodePen
            </a> */}
          </div>
        )}
        <div className={footerStyles.logo}>
          <img src={imgLogo} alt="" />
        </div>
        <div className={footerStyles.copyright}>&copy; {(new Date().getFullYear())} Justin Spegele</div>
      </footer>
    </Container>
  )
}

export default Footer
