import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'

export const query = graphql`
  fragment TabBlock on MarkdownRemark {
    frontmatter {
      sections {
        block {
          title
          content
          backgroundimage
        }
      }
    }
  }
`
export default class TabBlock extends Component {
  render() {
    const { data, index } = this.props;
    return (
      <Fragment>
        <div role="tabpanel" className={["tab-pane", "fade", (index===1 ? "show active": "")].join(" ")}  id={"tab_"+index}>
          <div className="row d-flex align-items-center">
            <div className="offset-md-3 col-md-6 col-sm-12 col-12">
              <Marked>
                { data.content }
              </Marked>
            </div>
          </div>
          { data.backgroundimage !== '' && 
            <img data-original={data.backgroundimage} alt="" className="lazygif" />
          }
        </div>
      </Fragment>
    )
  }
}

TabBlock.propTypes = {
  
}