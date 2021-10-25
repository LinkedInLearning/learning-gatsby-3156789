import * as React from "react"

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
