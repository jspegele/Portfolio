import React from 'react'
import { RiMailSendFill } from 'react-icons/ri'
import { Link } from 'gatsby'

import buttonStyles from './styles/buttons.module.css'
import headerStyles from './styles/header.module.css'

import imgLogo from '../images/js-logo.png'

import Container from './container'

const Header = ({ type }) => {

  return (
    <div className={headerStyles.headerWrapper}>
      <Container>
        <header className={headerStyles.header}>
          <Link to="/" className={headerStyles.title}>
            <img src={imgLogo} alt="" /><span>Justin Spegele</span>
          </Link>
          <nav className={headerStyles.nav}>
            {type === 'full' && (
              <>
                <Link
                  to="#services"
                  className={`${buttonStyles.button} ${headerStyles.navItem}`}
                  activeClassName={headerStyles.activeNavItem}
                >
                  Services
                </Link>
                <Link
                  to="#work"
                  className={`${buttonStyles.button} ${headerStyles.navItem}`}
                  activeClassName={headerStyles.activeNavItem}
                >
                  Work
                </Link>
                <Link
                  to="#about"
                  className={`${buttonStyles.button} ${headerStyles.navItem}`}
                  activeClassName={headerStyles.activeNavItem}
                >
                  About
                </Link>
                <Link
                  to="#contact"
                  className={`${buttonStyles.button} ${headerStyles.navItem}`}
                  activeClassName={headerStyles.activeNavItem}
                >
                  Contact
                </Link>
              </>
            )}
            {type === 'subpage' && (
              
              <Link
                to="#contact"
                className={`${buttonStyles.button} ${headerStyles.navItem}`}
                activeClassName={headerStyles.activeNavItem}
              >
                Contact Us Today <RiMailSendFill className={headerStyles.icon} />
              </Link>
            )}
            {type === 'portfolio' && (
              
              <a
                href="mailto:justin@justinspegele.com?subject=Hello Justin"
                className={`${buttonStyles.button} ${headerStyles.navItem}`}
                activeClassName={headerStyles.activeNavItem}
              >
                Contact Me <RiMailSendFill className={headerStyles.icon} size="2rem" />
              </a>
            )}
          </nav>
        </header>
      </Container>
    </div>
  )
}

export default Header
