import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Mainnav from "./Mainnav"

import * as styles from "./header.module.css"

const Header = ({ siteTitle, siteDescription, menuLinks }) => (
  <header id="site-header" className={styles.masthead} role="banner">
    <div className={styles.masthead_info}>
      <Link to="/">
        <img
          src="/logo.svg"
          width="366"
          height="374"
          alt={siteTitle}
          className={styles.site_logo}
        />
        <div className={styles.site_title}>{siteTitle}</div>
        <div>{siteDescription}</div>
      </Link>
    </div>
    <Mainnav menuLinks={menuLinks} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
  menuLinks: [],
}

export default Header
