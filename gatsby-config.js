module.exports = {
  siteMetadata: {
    defaultTitle: `Opinionated Starter`,
    titleTemplate: `%s · a starting point`,
    author: `@mor10`,
    defaultDescription: `An opinionated starter for Gatsby`,
    siteUrl: `https://something.or.other`,
    logo: `/logo.png`,
    twitter: `@mor10`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
