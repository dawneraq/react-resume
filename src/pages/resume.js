import React from "react"
// import Header from "../gatsby-theme-blog/components/header"
import SEO from "../gatsby-theme-blog/components/seo"
import { graphql } from "gatsby"

const Resume = ({ data }) => {
  console.log("resume JSON:", data.allAssetsJson.edges[0].node)

  return (
    <>
      <SEO title="Resume" />
      <main>My resume is gonna be generated from JSON!</main>
    </>
  )
}

export const query = graphql`
  query JsonQuery {
    allAssetsJson {
      edges {
        node {
          education {
            school
            degree
            endDate
            gpa
            relevantCoursework
            startDate
          }
          basics {
            email
            siteURL
            name
            location
          }
          activitiesAndHonors {
            details {
              endDate
              name
              startDate
            }
            startDate
            name
          }
          projects {
            date
            details
            name
            recipient
          }
          workExperience {
            company
            details
            endDate
            position
            startDate
          }
          skills {
            keywords
            name
          }
        }
      }
    }
  }
`

export default Resume
