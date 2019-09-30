import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'

export const query = graphql`
  fragment IconBlock on MarkdownRemark {
    frontmatter {
      sections {
        block {
          title
          content
          icon
        }
      }
    }
  }
`
export default class IconBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <div className="col-md-4 col-12 item">
          <span className={ data.icon }></span>
          <Marked>
            { data.content }
          </Marked>
        </div>
      </Fragment>
    )
  }
}

IconBlock.propTypes = {
  
}