/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
