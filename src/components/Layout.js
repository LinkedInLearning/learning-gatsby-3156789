/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

// Styles
import "../styles/reset.css"
import * as styles from "./layout.module.css"

const Layout = ({ children }) => {
  // Destructure query return down to site:
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  )

  return (
    <>
      <a className="skip-link screen-reader-text" href="#primary">
        Skip to the content
      </a>
      <Header
        siteTitle={site.siteMetadata.title}
        siteDescription={site.siteMetadata.description}
        menuLinks={site.siteMetadata.menuLinks}
      />
      <main id="primary" className={styles.site_main}>
        {children}
      </main>
      <Footer siteTitle={site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
