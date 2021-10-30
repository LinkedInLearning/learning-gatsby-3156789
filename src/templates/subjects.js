import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import _ from "lodash"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Pagination from "../components/Pagination"
import * as styles from "./articles.module.css"

// Component to place a conditional wrapper around content.
const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

const SubjectIndex = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { subject } = pageContext
  console.log(pageContext)

  let pageHeader = `Articles`
  if (subject) {
    pageHeader = `Filed under ${subject}:`
  }

  return (
    <Layout>
      <Seo
        title={`All articles on the subject "${subject}"`}
        description="All articles filed under this subject."
        image="/logo.png"
        pathname={`/subjects/${subject}`}
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={styles.articlelist}>
        <h2>{pageHeader}</h2>
        <ul>
          {posts.map(({ node: article }, index) => (
            <li key={index} className={styles.listitem}>
              {article.frontmatter.featimg && (
                <figure className={styles.featimg}>
                  <Link to={article.fields.slug}>
                    <GatsbyImage
                      image={getImage(article.frontmatter.featimg)}
                      alt={article.frontmatter.title}
                    />
                  </Link>
                </figure>
              )}
              <ConditionalWrapper
                // If featured image, wrap content in <div>.
                condition={article.frontmatter.featimg}
                wrapper={children => (
                  <div className={styles.article__wrap}>{children}</div>
                )}
              >
                <Link to={article.fields.slug}>
                  <h1 className={styles.article__title}>
                    {article.frontmatter.title}
                  </h1>
                </Link>

                <div className={styles.article__meta}>
                  by {article.frontmatter.author}. Published{" "}
                  {new Date(article.frontmatter.date).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}{" "}
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
                  dangerouslySetInnerHTML={{ __html: article.excerpt }}
                />
              </ConditionalWrapper>
            </li>
          ))}
        </ul>
      </section>
      <Pagination pageContext={pageContext} />
    </Layout>
  )
}

export default SubjectIndex

export const query = graphql`
  query ($subject: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { subject: { in: [$subject] } } }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date
            subject
            author
            featimg {
              childImageSharp {
                gatsbyImageData(width: 400, height: 400, placeholder: BLURRED)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
