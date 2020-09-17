const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const guideTemplate = path.resolve('./src/templates/guide.js')

  const guideRes = await graphql(`
    query {
      allMarkdownRemark (
        filter: {fileAbsolutePath: {regex: "/(guides)/"  }}
      )  {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  guideRes.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: guideTemplate,
      path: `/guide/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })

}
