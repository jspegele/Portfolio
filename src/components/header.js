import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './styles/header.module.scss'
import buttonStyles from './styles/buttons.module.scss'
import Container from './container'

const Header = () => {

  return (
    <div className={headerStyles.headerWrapper}>
      <Container>
        <header className={headerStyles.header}>
          <h1 className={headerStyles.title}>
            <Link to="/" className={buttonStyles.buttonPrimary}>
              Justin Spegele
            </Link>
          </h1>
          <nav>
            <ul className={headerStyles.navList}>
              <li>
                <Link
                  to="/"
                  className={`${headerStyles.navItem} ${buttonStyles.buttonPrimary}`}
                  activeClassName={buttonStyles.buttonPrimaryActive}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${headerStyles.navItem} ${buttonStyles.buttonPrimary}`}
                  activeClassName={buttonStyles.buttonPrimaryActive}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/guides"
                  className={`${headerStyles.navItem} ${buttonStyles.buttonPrimary}`}
                  activeClassName={buttonStyles.buttonPrimaryActive}
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${headerStyles.navItem} ${buttonStyles.buttonPrimary}`}
                  activeClassName={buttonStyles.buttonPrimaryActive}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </div>
  )
}

export default Header
