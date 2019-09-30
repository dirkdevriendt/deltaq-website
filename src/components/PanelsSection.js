import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import LocationTeaser from './LocationTeaser'

export default () => {
  const data = useStaticQuery(graphql`
    query Locations {
      locations: allMarkdownRemark(
        filter: { fields: { contentType: { eq: "location" } } }
        sort: { order: ASC, fields: [frontmatter___sortweight] }
        limit: 6
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              subtitle
              featuredImage
            }
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      {data.locations != null && data.locations.edges.map((location, index) => (
        <LocationTeaser data={location} key={index}/>
      ))}      
    </Fragment>
  )
}