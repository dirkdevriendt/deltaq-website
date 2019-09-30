import React from 'react'

const TeamTeaser = ({
  data,
  ...props
}) => (
  <div className="teamitem flex-row d-flex">
    <div className="image">
      <img src={data.node.frontmatter.featuredImage} alt=""/>
    </div>
    <div className="name d-flex flex-column">
      <strong>{data.node.frontmatter.title}</strong>
      <span>{data.node.frontmatter.subtitle}</span>
      <a href={data.node.frontmatter.externallink} target="_blank" rel="noopener noreferrer"><span className="icon-linkedin"></span></a>
    </div>
  </div>
)

export default TeamTeaser