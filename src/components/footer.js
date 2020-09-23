import React from 'react'

import Container from './container'

import footerStyles from './styles/footer.module.scss'

const Footer = () => {
  return (
    <Container>
      <footer className={footerStyles.footer} id="contact">
        <div className={footerStyles.contact}>
          <a href="mailto:hello@justinspegele.com?subject=Hello Justin">hello@justinspegele.com</a>
        </div>
        <div className={footerStyles.links}>
          <a href="/assets/JustinSpegeleResume.pdf" target="_blank">Resume</a>
          <a href="https://www.linkedin.com/in/justinspegele/" target="_blank">LinkedIn</a>
          <a href="https://github.com/jspegele" target="_blank">GitHub</a>
          {/* <a href="https://codepen.io/jspegele" target="_blank">CodePen</a> */}
        </div>
        <div className={footerStyles.copyright}>© 2020 Justin Spegele</div>
      </footer>
    </Container>
  )
}

export default Footer
