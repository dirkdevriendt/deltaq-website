import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'

import NewsSection from './NewsSection';

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class News extends Component {
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
        <section className="articlesection news--items py-max">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <Marked>
                  { data.content }
                </Marked>
              </div>
            </div>
            <div className="row articles">
              <NewsSection />
            </div>
          </div>
        </section> 
      </Fragment>
    )
  }
}

News.propTypes = {
  
}