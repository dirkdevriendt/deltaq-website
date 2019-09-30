import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'
import PartnersSection from './PartnersSection'

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class Partners extends Component {
  state = {
    loaded: false,
    isOpen: false,
    sliderImages: [],
    index: 0
  }
 
  isOpen(isOpen, index) {
    if (typeof index === 'undefined') index = 0
    this.setState({ isOpen, index })
  }

  componentDidMount() {

  }

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className="partnersection py-mid">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <Marked>
                  { data.content }
                </Marked>
              </div>
              <PartnersSection />
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

Partners.propTypes = {
  
}