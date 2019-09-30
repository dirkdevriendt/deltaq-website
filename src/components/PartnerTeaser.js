import React from 'react'

const PartnerTeaser = ({
  data,
}) => (
  <img src={data.node.frontmatter.featuredImage} alt=""/>
)

export default PartnerTeaser