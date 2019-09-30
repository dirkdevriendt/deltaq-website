import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'
import window from 'global'

class Observer extends Component {
  componentDidMount() {
    window.dq_initHowItWorks();
  }
  componentWillUnmount() {

  }
  render() {
    return null
  }
}

export const query = graphql`
  fragment HowItWorks on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class HowItWorks extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section class="howitworks py-max bg-grey">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <Marked>{ data.title }</Marked>
              </div>
            </div>
            <div class="row" id="outer">
              <div class="col-12">
                <div class="start" id="step0"></div>
              </div>
              <div class="offset-lg-1 col-lg-5 offset-md-1 col-md-5 col-12 item item1 hiddenItem">
                <div class="step" id="step1"></div>
                <span class="icon icon-screwdriver"></span>
                <Marked>{ data.content1 }</Marked>
              </div>
              <div class="col-lg-6 col-md-6 col-12 item item2 hiddenItem">
                <div class="step" id="step2"></div>
                <span class="icon icon-laptop"></span>
                <Marked>{ data.content2 }</Marked>
              </div>
              <div class="offset-lg-6 col-lg-6 offset-md-6 col-md-6 col-12 item item3 hiddenItem">
                <div class="step" id="step3"></div>
                <span class="icon icon-settings-horizontal"></span>
                <Marked>{ data.content3 }</Marked>
              </div>
              <div class="col-lg-4 col-md-4 col-12 item item4 text-right hiddenItem">
                <div class="fakespot"></div>
                <div class="step" id="step4a"></div>
                <span class="icon icon-e-learning-laptop-1"></span>
                <Marked>{ data.content4 }</Marked>
              </div>
              <div class="offset-lg-4 col-lg-4 offset-md-4 col-md-4 col-12 item item5 hiddenItem">
                <div class="fakespot"></div>
                <div class="step" id="step4b"></div>
                <span class="icon icon-e-learning-laptop-1"></span>
                <Marked>{ data.content5 }</Marked>
              </div>
              <div class="offset-lg-4 col-lg-4 offset-md-4 col-md-4 col-12 item item6 text-center hiddenItem">
                <div class="fakespot"></div>
                <div class="step" id="step5"></div>
                <span class="icon icon-sea-transport-wheel-boat"></span>
                <Marked>{ data.content6 }</Marked>
              </div>
            </div>
          </div>
        </section>
        <Observer />
      </Fragment>
    )
  }
}

HowItWorks.propTypes = {
  
}