import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'

export const query = graphql`
  fragment HighlightBlock on MarkdownRemark {
    frontmatter {
      sections {
        block {
          content
        }
      }
    }
  }
`
export default class HighlightBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <div class="col-md-4 col-sm-5 col-12">
          <Marked>
            { data.content }
          </Marked>
        </div>
      </Fragment>
    )
  }
}

HighlightBlock.propTypes = {
  
}