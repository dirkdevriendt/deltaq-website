import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  fragment ResourceBlock on MarkdownRemark {
    frontmatter {
      sections {
        block {
          title
          content
          backgroundimage
          subtitle
          externallink
        }
      }
    }
  }
`

export default class ResourceBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <div className="col-lg-3 col-sm-6 col-12">
          <a href={data.externallink === '' ? '#' : data.externallink} className={["article", (data.externallink === '' ? "comingsoon" : "")].join(" ")}>
            <div className="image">
              {data.backgroundimage !== null && 
                <img src={data.backgroundimage} alt="" />
              }
              {data.backgroundimage === null && 
                <img src="/img/dummy.jpg" alt="" />
              }
            </div>
            <div className="content">
              <h5>{data.title}</h5>
              <p>{data.content}</p>
              <span className="smallBtn ghostBtn">{data.subtitle}</span>
            </div>
          </a>
        </div>
      </Fragment>
    )
  }
}

ResourceBlock.propTypes = {
  
}