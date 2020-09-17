import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'

import footerStyles from './styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>© 2020 Boilerplate</p>
    </footer>
  )
}

export default Footer
