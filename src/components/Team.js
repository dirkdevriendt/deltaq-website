import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'
import TeamSection from './TeamSection';

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class Team extends Component {
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
        <section className="teamsection py-max">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Marked>
                  { data.content }
                </Marked>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-10 col-12 d-flex flex-wrap team">
              <TeamSection />
            </div>
          </div>
        </section> 
      </Fragment>
    )
  }
}

Team.propTypes = {
  
}