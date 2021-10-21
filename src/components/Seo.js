/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import propTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ title, description, lang, image, pathname, article, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle
            titleTemplate
            defaultDescription
            siteUrl
            logo
            twitter
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.defaultTitle
  const titleTemplate = `%s` || site.siteMetadata.titleTemplate
  const metaDescription = description || site.siteMetadata.defaultDescription
  const metaURL = `${site.siteMetadata.siteUrl}${pathname || ``}`
  const metaImage = `${site.siteMetadata.siteUrl}${
    image || site.siteMetadata.logo
  }`
  const twitterUsername = site.siteMetadata.twitterUsername
  const boolArticle = article || false

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={metaTitle ? `${metaTitle} ${titleTemplate}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `canonical`,
          content: metaURL,
        },
        {
          name: `image`,
          content: metaImage,
        },
        {
          name: `og:url`,
          content: metaURL,
        },

        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          name: `og:sitename`,
          content: site.siteMetadata.defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: boolArticle ? `article` : `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername || ``,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  description: ``,
  lang: `en`,
  image: ``,
  pathname: `/`,
  article: false,
  meta: [],
}

Seo.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string,
  lang: propTypes.string,
  image: propTypes.string,
  pathname: propTypes.string,
  article: propTypes.bool,
  meta: propTypes.arrayOf(propTypes.object),
}

export default Seo
