import React, { Component, Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import Marked from 'react-markdown'
import StepBlock from './StepBlock'

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class StepsBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className="stepscolumn py-max bg-grey">
          <div className="container">
            <div className="row">
              <div className="offset-md-2 col-md-8 col-12 text-center pb-mid">
                <Marked>
                  { data.content }
                </Marked>
              </div>
            </div>
            <div class="row d-flex align-items-stretch">
              {data.block != null && data.block.map((block, index) => (
                <StepBlock data={block} index={(index+1)}/>
              ))}
            </div>
            {data.link != null && data.subtitle != null && 
              <div class="row">
                <div class="col-12 text-center pt-mid">
                  <Link to={ data.link }>
                    <span class="arrowlink">
                      { data.subtitle }
                    </span>
                  </Link>
                </div>
              </div>
            }
          </div>
        </section>
      </Fragment>
    )
  }
}

StepsBlock.propTypes = {
  
}