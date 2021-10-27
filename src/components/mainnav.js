import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./mainnav.module.css"

const Mainnav = ({ menuLinks }) => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {menuLinks.map(props => (
          <li key={props.name}>
            <Link to={props.link}>{props.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Mainnav
