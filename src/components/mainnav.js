import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./mainnav.module.css"

const Mainnav = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Mainnav
