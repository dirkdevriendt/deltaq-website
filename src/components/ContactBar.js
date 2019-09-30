import React, { Component, Fragment } from 'react'
import Marked from 'react-markdown'
import ContactFormHtml from './ContactFormHtml'
import window from 'global'

class Observer extends Component {
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return null
  }
}

export default ({props}) => {
  return (
    <Fragment>
      <section className="ctasection py-mid" style={{ backgroundImage: "url('/img/ctabg.jpg')"}}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="offset-md-1 col-md-7 col-sm-8 col-12">
              <Marked>
                { props.title }
              </Marked>
            </div>
            <div className="col-md-3 col-sm-4 col-12 text-right">
              <span className="smallBtn modalbtn" data-color="blue" onClick={window.dq_linkModals}>{ props.content }</span>
            </div>
          </div>
        </div>
        <div class="sectionmodal">
          <div class="modal fade contactModal" id="" tabindex="-1" role="dialog" aria-labelledby="contactModalTitle" aria-hidden="true" data-color="blue">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" class="icon-close"></span>
                    </button>
                </div>
                <div class="modal-body">
                <ContactFormHtml classname="contactform"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Observer/>
    </Fragment>
  )
}