import React from 'react'
import { Link } from 'gatsby'
import { RiCodeSSlashLine } from 'react-icons/ri'

import buttonStyles from './styles/buttons.module.scss'
import headerStyles from './styles/header.module.scss'

import Container from './container'

const Header = () => {

  return (
    <div className={headerStyles.headerWrapper}>
      <Container>
        <header className={headerStyles.header}>
          <Link to="/" className={headerStyles.title}>
            <RiCodeSSlashLine /> Justin Spegele
          </Link>
          <nav className={headerStyles.nav}>
            <Link
              to="/#about"
              className={`${buttonStyles.button} ${headerStyles.navItem}`}
              activeClassName={headerStyles.activeNavItem}
            >
              About
            </Link>
            <Link
              to="/#projects"
              className={`${buttonStyles.button} ${headerStyles.navItem}`}
              activeClassName={headerStyles.activeNavItem}
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              className={`${buttonStyles.button} ${headerStyles.navItem}`}
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
            {/* <Link
              to="/guides"
              className={`${buttonStyles.button} ${headerStyles.navItem}`}
              activeClassName={headerStyles.activeNavItem}
            >
              Guides
            </Link> */}
          </nav>
        </header>
      </Container>
    </div>
  )
}

export default Header
