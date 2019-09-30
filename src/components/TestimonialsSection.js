import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import TestimonialTeaser from './TestimonialTeaser'
import 'react-id-swiper/lib/styles/css/swiper.css'

export default () => {
  const data = useStaticQuery(graphql`
    query Testimonials {
      testimonials: allMarkdownRemark(
        filter: { fields: { contentType: { eq: "testimonial" } } }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              title
              subtitle
              excerpt
              featuredImage
            }
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      {data.testimonials != null && data.testimonials.edges.map((testimonial, index) => (
        <TestimonialTeaser data={testimonial} key={index}/>
      ))}
    </Fragment>
  )
}