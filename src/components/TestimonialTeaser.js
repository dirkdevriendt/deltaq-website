import React from 'react'

const TestimonialTeaser = ({
  data,
  ...props
}) => (
  <div className="testimonial">
    <blockquote>“{data.node.frontmatter.excerpt}”</blockquote>
    <div className="autor d-flex align-items-center">
      <div className="image">
        <img src={data.node.frontmatter.featuredImage} alt=""/>
      </div>
      <div className="name">
        <p><strong>{data.node.frontmatter.title}</strong></p>
        <p>{data.node.frontmatter.subtitle}</p>
      </div>
    </div>
  </div>
)

export default TestimonialTeaser