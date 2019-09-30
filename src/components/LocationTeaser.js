import React from 'react'

const LocationTeaser = ({
  data,
}) => (
  <div className="col-lg-2 col-md-4 col-6 panelitem">
    <img src={data.node.frontmatter.featuredImage} alt=""/>
    <a href="#nolink" className="content nolink">
      <div className="titel">
        <h4>{data.node.frontmatter.title}</h4>
        <span>{data.node.frontmatter.subtitle}</span>
      </div>
    </a>
  </div>
)

export default LocationTeaser