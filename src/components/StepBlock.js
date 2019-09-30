import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'

export const query = graphql`
  fragment StepBlock on MarkdownRemark {
    frontmatter {
      sections {
        block {
          title
          content
        }
      }
    }
  }
`
export default class StepBlock extends Component {
  render() {
    const { data, index } = this.props;
    return (
      <Fragment>
        <div className="col-md-4 col-12 text-center">
          <div className="step">
            <span className="counter">{ index }</span>
            <Marked>
              { data.content }
            </Marked>
          </div>
        </div>
      </Fragment>
    )
  }
}

StepBlock.propTypes = {
  
}