import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Marked from 'react-markdown'
import ContactFormHtml from './ContactFormHtml'
import window from 'global'

export const query = graphql`
  fragment DemoText on MarkdownRemark {
    frontmatter {
      sections {
        type
      }
    }
  }
`
export default class DemoText extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <section className={["textsection", "demosection", "py-max", data.theme].join(" ")}>
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div className="col-sm-5 col-12">
                <img src={data.backgroundimage} alt=""/>
              </div>
              <div className="offset-md-1 col-sm-6 col-12">
						    <div className="content">
                  <Marked>
                    { data.content }
                  </Marked>
                  {data.subtitle !== "" &&
                    <button className="smallBtn demobtn"  onClick={window.dq_linkDemoModals}>{ data.subtitle }</button>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="demomodal">
            <div className="modal fade page-model modal-fullscreen" tabindex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" className="icon-close"></span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="container">
                      <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-12 demohtml">
                          <Marked>{ data.title }</Marked>
                        </div>
                        <div className="col-md-6 col-12">
                          <ContactFormHtml classname="contactform modalform"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

DemoText.propTypes = {
  
}