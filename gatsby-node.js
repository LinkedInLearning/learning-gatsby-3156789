/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

/**
 * Events
 */
// Define the "Event" node type with a "collection" field.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
        """
        Event 
        """
        type Event implements Node @dontInfer {
          id: ID!
          name: String!
          location: String!
          startDate: Date! @dateformat @proxy(from: "start_date")
          endDate: Date! @dateformat @proxy(from: "end_date")
          url: String!
          collection: String!
        }
      `
  createTypes(typeDefs)
}

// Add and populate a "collection" field based on the file directory name.
exports.createResolvers = ({ createResolvers, getNode }) => {
  // Get the containing directory for the event (past or future)
  const collection = source => getNode(source.parent).relativeDirectory

  // Add a "collection" field to each node.
  createResolvers({
    Event: {
      collection: {
        resolve: source => collection(source),
      },
    },
  })
}

/**
 * Articles
 */

// Markdown items: Create slug nodes based on folder
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })

    actions.createNodeField({
      node,
      name: `slug`,
      value: `/articles${slug}`,
    })
  }
}

// Generate pages for each article.

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Query all the data
  const queryResult = await graphql(`
    {
      articleQuery: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
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
  if (queryResult.errors) {
    reporter.panic("error loading articles", queryResult.errors)
    return
  }

  // Generate single article pages
  const articles = queryResult.data.articleQuery.edges
  articles.forEach(article => {
    createPage({
      path: article.node.fields.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: article.node.fields.slug,
      },
    })
  })
}
