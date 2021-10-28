import * as React from "react"
import PropTypes from "prop-types"

import * as styles from "./event.module.css"

// Transform date to human readable format.
const humanDate = date => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

const Event = ({ event }) => (
  <li className={styles.event}>
    <div className={styles.event__title}>
      <a href={event.url}>{event.name}</a>
    </div>
    <div className={styles.event__meta}>
      {humanDate(event.startDate)}{" "}
      {event.endDate && `to ${humanDate(event.endDate)}`}
    </div>
    <div className={styles.event__meta}>{event.location}</div>
  </li>
)

Event.propTypes = {
  event: PropTypes.object.isRequired,
}

Event.defaultProps = {
  event: [],
}

export default Event
