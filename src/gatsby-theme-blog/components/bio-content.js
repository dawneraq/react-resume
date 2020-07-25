import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)

  return <>{data.site.siteMetadata.description}</>
}
