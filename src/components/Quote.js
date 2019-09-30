import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'

export const query = graphql`
  fragment Quote on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class Quote extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className="quotesection py-max bg-grey">
          <div className="container">
            <div className="row">
              <div class="offset-md-2 col-md-2 col-sm-3 col-2">
                <span class="icon-quote"></span>
              </div>
              <div className="col-md-7 col-sm-9 col-10">
                <blockquote>
                  “<Marked>{ data.description }</Marked>”
                </blockquote>
                { data.title !== null && data.title !== '' && 
                  <span className="autor"><i>{ data.title }</i></span>
                }
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

Quote.propTypes = {
  
}