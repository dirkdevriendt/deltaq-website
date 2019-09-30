import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'
import TestimonialsSection from './TestimonialsSection'

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class Testimonials extends Component {
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
        <section className={["testimonialsection", "py-max", data.theme].join(" ")} >
          <div className="container">
            <div className="row">
              <div className="offset-lg-2 col-lg-8 col-12 text-center">
                <Marked>
                  { data.content }
                </Marked>
              </div>
              <div className="offset-lg-2 col-lg-8 col-12">
                <TestimonialsSection data={data}/>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

Testimonials.propTypes = {
  
}