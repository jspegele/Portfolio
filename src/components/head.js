import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import favicon from '../images/favicon.png'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {title ? (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
          <link rel="icon" href={favicon} />
        </Helmet>
      ) : (
        <Helmet title={data.site.siteMetadata.title}>
          <link rel="icon" href={favicon} />
        </Helmet>
      )}
    </>
  )
}

export default Head