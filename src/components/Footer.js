import React from 'react';

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="container">
      <div className="footer__contact"><a href="mailto:hello@justinspegele.com?subject=Hello Justin">hello@justinspegele.com</a></div>
      <div className="footer__links">
        <a href="/assets/JustinSpegeleResume.pdf" target="_blank">Resume</a>
        <a href="https://www.linkedin.com/in/justinspegele/" target="_blank">LinkedIn</a>
        <a href="https://github.com/jspegele" target="_blank">GitHub</a>
        <a href="https://codepen.io/jspegele" target="_blank">CodePen</a>
      </div>
    </div>
    <div className="footer__copyright">© 2020 Justin Spegele</div>
  </footer>
);

export default Footer;