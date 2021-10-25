import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import * as styles from "./about.module.css"
import RobotImage from "../components/RobotImage"

const AboutPage = () => (
  <Layout>
    <Seo
      title="Aboutpage"
      description="About page description."
      image="/logo.png"
      pathname="/"
      // Boolean indicating whether this is an article:
      // article
    />
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>About this project</h1>
      <div>
        <RobotImage src="/images/bubbles-callout.png" alt="bubbles the robot" />
        <RobotImage src="/images/dolly-callout.png" alt="dolly the robot" />
        <RobotImage src="/images/eileen-callout.png" alt="eileen the robot" />
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

export default AboutPage
