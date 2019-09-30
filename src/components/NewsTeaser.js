import React from 'react'
import Marked from 'react-markdown'

const NewsTeaser = ({
  data,
}) => (
  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 item swiper-slide">
    <div className={["article", (data.node.frontmatter.externallink === "" ? "nolink" : "")].join(" ")}>
      <div className="image">
        <img src={data.node.frontmatter.featuredImage} alt=""/>
      </div>
      <div className="content">
        <span className="date">{data.node.frontmatter.date}</span>
        <h5>{data.node.frontmatter.title}</h5>
        <Marked>{data.node.frontmatter.excerpt}</Marked>
        {(data.node.frontmatter.externallink !== "" && 
          <a className="arrowlink" href={data.node.frontmatter.externallink}  target="_blank" rel="noopener noreferrer">{data.node.frontmatter.subtitle}</a>
        )}
      </div>
    </div>
  </div>
)

export default NewsTeaser