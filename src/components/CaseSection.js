import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import CaseTeaser from './CaseTeaser'

const CaseSection = ({ props }) => (
  <StaticQuery
    query={graphql`
      query CaseSection {
        cases: allMarkdownRemark(filter: {fields: {contentType: {eq: "case"}}}) {
          edges {
            node {
              frontmatter {
                title
                featuredGallery
                building
                floorarea
                keyresults {
                  content
                  icon
                }
                activation(formatString: "DD.MM.YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      const casecard = data.cases.edges.find(
        edge => edge.node.fields.slug === '/'+props.link+'/'
      )
      if (!casecard) {
        return null
      }
      return <CaseTeaser data={casecard}/>
    }}
  />
)
export default CaseSection