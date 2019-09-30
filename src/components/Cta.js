import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

export const query = graphql`
  fragment Cta on MarkdownRemark {
    frontmatter {
      sections {
        cta {
          title
          subtitle
          link
        }
      }
    }
  }
`
export default class Cta extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <Link className="animated fadeInUp delay1" to={ data.link }>
          <p><strong>{ data.title }</strong></p>
          <span className="arrowlink">{ data.subtitle }</span>
        </Link>
      </Fragment>
    )
  }
}

Cta.propTypes = {
  
}