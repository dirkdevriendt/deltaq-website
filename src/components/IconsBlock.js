import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'
import IconBlock from './IconBlock'

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class IconsBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className="iconscol py-max bg-grey">
          <div className="container">
            <div className="row">
              <div className="col-12">
              <Marked>
                { data.content }
              </Marked>
              </div>
              {data.block != null && data.block.map((block, index) => (
                <IconBlock data={block}/>
              ))}
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

IconsBlock.propTypes = {
  
}