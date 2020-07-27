import React from "react"
// import Header from "../gatsby-theme-blog/components/header"
import SEO from "../gatsby-theme-blog/components/seo"
import { graphql } from "gatsby"

const Resume = ({ data }) => (
  <>
    <SEO title="Resume" />
    {/* TODO Should a Header be included? */}
    {/* <Header
      location={{ pathname: "resume" }}
      title={data.site.siteMetadata.title}
    ></Header> */}
    <main>My resume is gonna be generated from JSON!</main>
  </>
)

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

export default Resume
