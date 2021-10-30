import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import _ from "lodash"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "./article.module.css"

const Article = ({ data }) => {
  const article = data.markdownRemark
  return (
    <Layout>
      <Seo
        title={article.frontmatter.title}
        description={article.excerpt}
        image="/logo.png"
        pathname={article.fields.slug}
        // Boolean indicating whether this is an article:
        article
      />
      <article className={styles.article}>
        {article.frontmatter.featimg && (
          <figure className={styles.featimg}>
            <GatsbyImage
              image={getImage(article.frontmatter.featimg)}
              alt={article.frontmatter.title}
            />
          </figure>
        )}

        <h1 className={styles.article__title}>{article.frontmatter.title}</h1>

        <div className={styles.article__meta}>
          by {article.frontmatter.author}. Published{" "}
          {new Date(article.frontmatter.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
        </div>
        <div className={styles.article__tax}>
          Filed under:{" "}
          {article.frontmatter.subject.map((subject, index) => [
            index > 0 && ", ",
            <Link key={index} to={`/subjects/${_.kebabCase(subject)}`}>
              {subject}
            </Link>,
          ])}
        </div>
        <div
          className={styles.article__content}
          // See https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </article>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date
        subject
        author
        featimg {
          childImageSharp {
            gatsbyImageData(width: 1360, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
