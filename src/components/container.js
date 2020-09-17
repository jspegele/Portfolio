import React from 'react'

import layoutStyles from './styles/container.module.scss'

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
        {props.children}
    </div>
  )
}

export default Layout
