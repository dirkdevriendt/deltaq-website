import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import ResourceBlock from './ResourceBlock'

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class ResourcesBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section class="articlesection resource--items py-max">
			    <div class="container">
				    <div class="row">
              {data.block != null && data.block.map((block, index) => (
                <ResourceBlock data={block} index={(index+1)}/>
              ))}
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

ResourcesBlock.propTypes = {
  
}