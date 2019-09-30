import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import CaseSection from './CaseSection';

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class KeyCase extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section class="casesection py-max">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2>Case</h2>
              </div>
            </div>
            <div class="row">
              <CaseSection props={data}/>
            </div>
				  </div>
		    </section>
      </Fragment>
    )
  }
}

KeyCase.propTypes = {
  
}