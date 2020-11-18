import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Logo from 'images/ASE_Logo.png'

const TopBar = (props) => {

  const {
    sign_in_route,
    sign_up_route,
  } = props

  return ( 
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="/">
        <img 
          id="imageSrc" 
          src={Logo} 
          className="img-fluid" 
          width="40"
          height="40"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/allvendors">All Vendors</Nav.Link>
        </Nav>
        <Nav>
          <Button className="btn bg-white text-secondary" href={sign_up_route}><strong>Sign Up</strong></Button>
          &nbsp;
          <Button className="btn bg-white text-secondary" href={sign_in_route}><strong>Log In</strong></Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;