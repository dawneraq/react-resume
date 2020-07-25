import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export default function Bio() {
  const { description } = useSiteMetadata()

  return <>{description}</>
}
