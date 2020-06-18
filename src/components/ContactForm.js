import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Marked from 'react-markdown'
import ContactFormHtml from '../components/ContactFormHtml'
import window from 'global'

class Observer extends Component {
  componentDidMount() {
    window.dq_linkForms();
  }
  componentWillUnmount() {

  }
  render() {
    return null
  }
}

export default ({props}) => {
  return (
    <StaticQuery
      query={graphql`
        query contactLayoutQuery {
          settingsYaml {
            address
            email
            phone
            linkedin
            twitter
          }
        }
      `}
      render={data => {
        const { address, email, phone, linkedin, twitter  } =
            data.settingsYaml || {}
        return (
          <section className={["contactsection", "py-max", props.contacttheme].join(" ")}>
            <div className="bgimg col-md-5" style={{ backgroundImage: "url('/img/getintouch.jpg')"}}></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-12 d-flex flex-column">
                  <div className="titel">
                    <Marked>
                      { props.title }
                    </Marked>
                  </div>
                  <div className="details">
                    <h4>Visit us</h4>
                    <Marked>
                      { address }
                    </Marked>

                    <h5>Contact us</h5>
                    <p>T <a href={ "tel:" + phone }>{phone}</a></p>
                    <p>E <a href={ "mailto:" + email }>{email}</a></p>
                    
                    <h5>Connect with us</h5>
                    <ul className="socials">
                      <li><a href={linkedin} target="_blank" rel="noopener noreferrer" alt="DeltaQ LinkedIn"><span className="icon-linkedin"></span></a></li>
                      <li><a href={twitter} target="_blank" rel="noopener noreferrer" alt="DeltaQ Twitter"><span className="icon-twitter"></span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="offset-lg-2 col-lg-5 offset-md-1 col-md-6 col-12">
                <ContactFormHtml classname="contactform"/>
                </div>
              </div>
            </div>
            <Observer/>
          </section>
        )
      }}
    />
  )
}
