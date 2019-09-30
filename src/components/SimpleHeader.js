import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'

export const query = graphql`
  fragment SimpleHeader on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class SimpleHeader extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className="headertitle py-mid bg-grey">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <Marked>
                  { data.content }
                </Marked>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

SimpleHeader.propTypes = {
  
}