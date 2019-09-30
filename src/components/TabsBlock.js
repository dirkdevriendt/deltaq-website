import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'
import TabBlock from './TabBlock'

class Observer extends Component {
  componentDidMount() {
    window.dq_initLazyImg();
  }
  componentWillUnmount() {

  }
  render() {
    return null
  }
}

export const query = graphql`
  fragment Header on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class TabsBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className="graphicsection py-max">
          <div className="container">
            <div className="row">
              <div className={["col-lg-8", "col-12", (data.block !== null && data.block.length > 1 ? "pb-max" : "pb-5")].join(" ")}>
                <Marked>
                  { data.content }
                </Marked>
              </div>
              <div className="col-12 text-center">
                {data.block != null && data.block.length > 1 &&
                  <ul className="nav nav-pills justify-content-center" role="tablist">
                    {data.block != null && data.block.length > 1 && data.block.map((block, index) => (
                      <li className="nav-item">
                        <a className={["nav-link", (index===0 ? "active": "")].join(" ")}  href={"#tab_" + (index+1)} role="tab" data-toggle="tab" aria-selected="false">{ block.title }</a>
                      </li>
                    ))}
                  </ul>
                }
                <div className="tab-content">
                  {data.block !== null && data.block.map((block, index) => (
                    <TabBlock data={block} index={(index+1)}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Observer />
        </section>
      </Fragment>
    )
  }
}

TabsBlock.propTypes = {
  
}