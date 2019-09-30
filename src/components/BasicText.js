import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'

export const query = graphql`
  fragment BasicText on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class BasicText extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className="textsection py-mid">
          <div className="container">
            <div className="row">
              <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12">
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

BasicText.propTypes = {
  
}