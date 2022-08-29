import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.css'
import layoutStyles from './styles/layout.module.css'

const Layout = props => {
  return (
    <div className={layoutStyles.wrapper}>
      <div className={layoutStyles.content}>
        <Header type={props.type} />
        {props.children}
      </div>
      <Footer type={props.type} />
    </div>
  )
}

Layout.defaultProps = {
  type: 'full'
}

export default Layout
