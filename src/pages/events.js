import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Event from "../components/Event"

import * as styles from "./events.module.css"

const EventsPage = ({ data }) => {
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
        <StaticImage
          src="../../content/images/getting-creative-with-3-d-printers-1184x360.jpg"
          alt="A dinosaur"
          layout="fullWidth"
        />
        <h1 className={styles.heading}>Events</h1>
        <div>
          <p>We attend and present at many events. Come join us!</p>
        </div>
      </section>
      <section className={styles.events}>
        <div className="eventList">
          <h2 className="eventHeading">Future events</h2>
          <ul className={styles.events__list}>
            {data.futureEvents.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
        <div className="eventList">
          <h2 className="eventHeading">Past events</h2>
          <ul className={styles.events__list}>
            {data.pastEvents.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    futureEvents: allEvent(
      filter: { collection: { eq: "future" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
    pastEvents: allEvent(
      filter: { collection: { eq: "past" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
  }
`

export default EventsPage
