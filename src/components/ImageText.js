import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'

export const query = graphql`
  fragment ImageText on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class ImageText extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className={["textsection", "py-max", data.theme].join(" ")}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12 d-flex flex-column">
                <Marked>
                  { data.content }
                </Marked>
                {data.subtitle !== "" && data.externallink !== "" &&
                  <div class="mt-auto">
							      <a href={data.externallink} class="smallBtn">{data.subtitle}</a>
						      </div>
                }
              </div>
              <div className="offset-lg-1 col-lg-6 col-md-6 col-12">
                <img src={data.backgroundimage} alt=""/>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

ImageText.propTypes = {
  
}