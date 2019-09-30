import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Marked from 'react-markdown'

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query dIndexLayoutQuery {
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
          <div>
            <footer className="py-max bg-blue">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-12">
                    <Link to="/">
                      <img src="/img/logo-w.png" alt=""/>
                    </Link>
                  </div>
                  <div className="col-lg-2 col-md-3 col-6 footer-column">
                    <h3>DeltaQ</h3>
                    <ul>
                      <li><Link to="howitworks">How it works</Link></li>
                      <li><Link to="resources">Resources</Link></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-3 col-6 footer-column">
                    <h3>Company</h3>
                    <ul>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/partner">Partner</Link></li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-3 col-6 footer-column">
                    <h3>Contact</h3>
                    <ul>
                      <li>T: <a href={ "tel:" + phone }>{phone}</a></li>
                      <li>E: <a href={ "mailto:" + email }>{email}</a></li>
                    </ul>
                    <Marked>
                      { address }
                    </Marked>
                  </div>
                  <div className="col-lg-2 col-md-3 col-6 footer-column">
                    <h3>Connect</h3>
                    <ul className="socials">
                      <li><a href={linkedin} target="_blank" rel="noopener noreferrer"><span className="icon-linkedin"></span></a></li>
                      <li><a href={twitter} target="_blank" rel="noopener noreferrer"><span className="icon-twitter"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>

            <section className="copyright py-4">
              <div className="container">
                <div className="row">
                  <div className="col-12 d-flex">
                    <p className="m-0">Copyright &copy; {new Date().getFullYear()} DeltaQ. All right reserved. Powered by </p><a href="http://www.3e.eu/" target='_blank' rel="noopener noreferrer"><span className="icon-e"></span></a>
                    <ul>
                      <li><Link to="terms-conditions">Terms & conditions</Link></li>
                      <li><Link to="legal">Legal notice</Link></li>
                      <li><Link to="disclaimer">Disclaimer</Link></li>
                      <li><Link to="cookies">Cookie policy</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      }}
    />
  )
}
