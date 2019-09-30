import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'
import HighlightBlock from './HighlightBlock'

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class Highlight extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className="highlightsection py-max" style={{ backgroundImage: "url(" + data.backgroundimage + ")"}}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Marked>
                  { data.content }
                </Marked>
              </div>
              <div class="col-md-2 col-sm-2 col-12">
                <img src={data.featuredImage} alt="" />
              </div>
              {data.block != null && data.block.map((block, index) => (
                <HighlightBlock data={block} index={(index+1)}/>
              ))}
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

Highlight.propTypes = {
  
}