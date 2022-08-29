import React from 'react'

import layoutStyles from './styles/container.module.css'

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
        {props.children}
    </div>
  )
}

export default Layout
