import React, { Component } from 'react'
import { Location } from '@reach/router'
import Logo from './Logo'
import Headroom from 'react-headroom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './Nav.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount() {
    this.setState({ currentPath: this.props.location.pathname })
  } 

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state
      /*{ subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      )*/

    return (
      <Headroom disableInlineStyles>
        <Navbar collapseOnSelect className={`justify-content-between ${active ? 'Nav-active' : ''}`} variant="" expand="lg">
          <Navbar.Brand href="/"  onClick={this.handleLinkClick}><Logo /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar cross"></span>
            <span class="icon-bar cross2"></span>
            <span class="icon-bar hidecross"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li" className={ ["/assets-propertymanagement", "/projectdevelopment-construction", "/building-occupants"].indexOf(this.state.currentPath) !== -1 ? 'active' : '' }>
                <NavDropdown as="li" title="Solutions" id="collabsible-nav-solutions" >
                  <NavDropdown.Item href="/assets-propertymanagement">Asset & property management <span>You manage</span></NavDropdown.Item>
                  <NavDropdown.Item href="/projectdevelopment-construction">Project development & construction <span>You build</span></NavDropdown.Item>
                  <NavDropdown.Item href="/facilitymanagement-maintenance">Facility management & maintenance <span>You maintain</span></NavDropdown.Item>
                  <NavDropdown.Item href="/building-occupants" >Building occupants <span>You rent</span></NavDropdown.Item>
                  <NavDropdown.Item href="/partner" className="colorbutton" >Become a partner</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item as="li" className={ ["/howitworks"].indexOf(this.state.currentPath) !== -1 ? 'active' : '' }><Nav.Link href="/howitworks" >How it works</Nav.Link></Nav.Item>
              <Nav.Item as="li" className={ ["/resources"].indexOf(this.state.currentPath) !== -1 ? 'active' : '' }><Nav.Link href="/resources" >Resources</Nav.Link></Nav.Item>
              <Nav.Item as="li">
                <NavDropdown title="Company" id="collabsible-nav-company" className={ ["/about", "/contact"].indexOf(this.state.currentPath) !== -1 ? 'active' : '' }>
                  <NavDropdown.Item href="/about" className="dropdown-item">About DeltaQ <span>Who we are</span></NavDropdown.Item>
                  <NavDropdown.Item href="/contact" className="dropdown-item">Contact us <span>How can we help?</span></NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item as="li" className="arrowlink"><Nav.Link href="https://app.deltaq.io" target='_blank'>Login</Nav.Link></Nav.Item>
              <Nav.Item as="li" className="navbutton">
                <Nav.Link href="/partner" className="nav-link">Become a partner</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Headroom>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
