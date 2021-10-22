import * as React from "react"
import styled from "styled-components "

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import RobotImage from "../components/RobotImage"

const Container = styled.section`
  margin: 2rem auto;
  max-width: 70ch;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`

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
    <Container>
      <h1>About this project</h1>
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
    </Container>
  </Layout>
)

export default AboutPage
