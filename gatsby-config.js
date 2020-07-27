module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Andrew Aquino`,
    author: `Andrew Aquino`,
    description: `I'm a frontend developer in Southern California. These are my projects and notes about JavaScript, CSS, design, and anything else I'm learning.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/aqandrew`,
      },
      {
        name: `github`,
        url: `https://github.com/dawneraq`,
      },
      {
        name: `codepen`,
        url: `https://codepen.io/dawneraq`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/dawneraq/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
