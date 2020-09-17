import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import guideStyles from './styles/guides.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            },
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={guideStyles.posts}>
          {
            data.allMarkdownRemark.edges.map(edge => 
              <li className={guideStyles.post}>
                <Link to={`/guide/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>)
          }
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
