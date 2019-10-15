import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import TeamTeaser from './TeamTeaser'


export default () => {

  const data = useStaticQuery(graphql`
    query Teamblock {
      teams: allMarkdownRemark(
        filter: { fields: { contentType: { eq: "team" } } }
        sort: { order: ASC, fields: [frontmatter___weight] }
      ) {
        edges {
          node {
            frontmatter {
              title
              featuredImage
              externallink
              subtitle
              weight
            }
          }
        }
      }
    }
  `)
  
  return (
    <Fragment>
      {data.teams != null && data.teams.edges.map((team, index) => (
        <TeamTeaser data={team} key={index}/>
      ))}
    </Fragment>
  )
}
