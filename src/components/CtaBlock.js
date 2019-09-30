import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'

export const query = graphql`
  fragment CtaBlock on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class CtaBlock extends Component {
  render() {
    return (
      <div ref={el => this.el = el}>
        <section className="stakeholdersection py-max" style={{ backgroundImage: "url('/img/getintouch.jpg')"}}>
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <h2>Choose your DeltaQ</h2>
                </div>
                <div className="col-12 stakeholders">
                  <div className="stakeholderlist justify-content-center">
                    <Link to="/assets-propertymanagement">
                      <p><strong>Assets & property management</strong></p>
                      <span className="arrowlink">You manage</span>
                    </Link>
                    <Link to="/projectdevelopment-construction">
                      <p><strong>Project development & construction</strong></p>
                      <span className="arrowlink">You build </span>
                    </Link>
                    <Link to="/facilitymanagement-maintenance">
                      <p><strong>Facility management & maintenance</strong></p>
                      <span className="arrowlink">You maintain</span>
                    </Link>
                    <Link to="/building-occupants">
                      <p><strong>Building occupants</strong></p>
                      <span className="arrowlink">You rent</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    )
  }
}

CtaBlock.propTypes = {
  
}