import React from 'react'
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import favicon from '../images/favicon.png'

const Head = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? title : site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        }
      ].concat(meta)}
    >
      <link rel="icon" href={favicon} />
    </Helmet>
  )
}

Head.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
  title: 'Justin Spegele | Web Developer, Researcher, PM'
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Head