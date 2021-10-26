import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import * as styles from "./events.module.css"

const EventsPage = () => {
  return (
    <Layout>
      <Seo
        title="Events"
        description="Come join us at an event in the future!"
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <StaticImage
        src="../../content/images/getting-creative-with-3-d-printers-1184x360.jpg"
        alt="A dinosaur"
        layout="fullWidth"
      />
      <section className={styles.wrapper}>
        <h1 className={styles.heading}>Events</h1>
        <div>
          <p>We attend and present at many events. Come join us!</p>
        </div>
      </section>
    </Layout>
  )
}

export default EventsPage
