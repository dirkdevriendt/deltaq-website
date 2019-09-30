import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'
import HistoryBlock from './HistoryBlock'
import window from 'global'

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
class Observer extends Component {
  componentDidMount() {
    window.dq_initHistory();
  }
  componentWillUnmount() {

  }
  render() {
    return null
  }
}

export default class History extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className="historysection py-max bg-grey">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <Marked>
                  { data.content }
                </Marked>
              </div>
            </div>
            {data.block != null && data.block.map((block, index) => (
              <HistoryBlock data={block} index={(index+1)}/>
            ))}
          </div>
        </section>
        <Observer/>
      </Fragment>
    )
  }
}

History.propTypes = {
  
}