import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import * as styles from "./about.module.css"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo
      title="About page"
      description="About page description."
      image="/logo.png"
      pathname="/"
      // Boolean indicating whether this is an article:
      // article
    />
    <section className={styles.wrapper}>
      <StaticImage
        src="../../content/images/robots-androids-and-cyborgs-oh-my-1184x360.jpg"
        alt="A dinosaur"
      />
      <h1 className={styles.heading}>About this project</h1>
      <div>
        {data.allFile.edges.map(({ node }) => (
          <GatsbyImage image={getImage(node)} alt={node.name} key={node.id} />
        ))}
        <p>
          Though it may not look like much, it holds all the essentials you'll
          need to get started building your own sites with Gatsby.
        </p>
        <p>
          Make sure to check out the updated templates to see how the SEO
          component is used, updated gatsby-node.js file for an additional
          function to handle markdown articles without subject taxonomies, and
          feel free to use this site as a template to build your own sites with
          Gatsby!
        </p>
        <p>
          And finally, lykke til from me to you on your journey with Gatsby!
        </p>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "robots" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
          id
          name
        }
      }
    }
  }
`

export default AboutPage
