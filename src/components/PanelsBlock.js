import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import PanelsSection from './PanelsSection';

export const query = graphql`
  fragment PanelsBlock on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class PanelsBlock extends Component {
  render() {
    return (
      <Fragment>
        <section className="panelsection">
	        <div className="container-fluid">
		        <div className="row">
                <PanelsSection />
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

PanelsBlock.propTypes = {
  
}