import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'

export const query = graphql`
  fragment QuoteText on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class QuoteText extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className={ ["textsection", "py-max", data.theme ].join(" ")}>
          <div className="container">
            <div className="row">
              <div className="offset-lg-1 col-lg-11 col-md-12 col-12">
                <Marked>
                  { data.title }
                </Marked>
              </div>
              <div className="offset-lg-1 col-lg-4 col-md-5 col-12">
                <div className="quote">
                  <p>“{ data.description }”.</p>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-6 offset-md-1 col-md-6 col-12">
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

QuoteText.propTypes = {
  
}