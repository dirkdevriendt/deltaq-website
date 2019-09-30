import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'

export const query = graphql`
  fragment HistoryBlock on MarkdownRemark {
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
export default class HistoryBlock extends Component {
  render() {
    const { data, index } = this.props;
    return (
      <Fragment>
        <div class="row no-gutters justify-content-center historyItem hiddenItem">
          {index % 2 === 0 &&
          <Fragment>
            <div class="col-md-5 pb-mid order-md-1 order-2">
              <div class="card">
                <div class="card-body">
                  <Marked>
                    { data.content }
                  </Marked>
                </div>
              </div>
            </div>
            <div class="bullet-line text-center flex-column d-none d-md-flex order-md-2">
                  <h5 class="m-2">
                      <span class="badge badge-pill bg-lightgrey">&nbsp;</span>
                  </h5>
                  <div class="h-100 line">&nbsp;</div>
              </div>
            <div class="col-md-5 timeline-date order-md-3 order-1">
              <time>{ data.title }</time>
            </div>
          </Fragment> }
          {index % 2 !== 0 &&
          <Fragment>
				    <div class="col-md-5 timeline-date text-right order-md-1 order-1">
			        	<time>{ data.title }</time>
			        </div>
				    <div class="bullet-line text-center flex-column d-none d-md-flex order-md-2">
			            <h5 class="m-2">
			                <span class="badge badge-pill bg-lightgrey">&nbsp;</span>
			            </h5>
			            <div class="h-100 line">&nbsp;</div>
			        </div>
				    <div class="col-md-5 pb-mid order-md-3 order-2">
				      <div class="card card-right">
				        <div class="card-body">
                  <Marked>
                    { data.content }
                  </Marked>
				        </div>
				      </div>
				    </div>
          </Fragment> }
        </div>
      </Fragment>
    )
  }
}

HistoryBlock.propTypes = {
  
}