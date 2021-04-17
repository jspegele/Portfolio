module.exports = {
  siteMetadata: {
    title: 'Justin Spegele | Web Developer, Researcher, PM',
    description: "Hi, I'm Justin Spegele. I'm a full-stack web developer, UX researcher, and digital PM",
    author: 'Justin Spegele - justinspegele.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}
