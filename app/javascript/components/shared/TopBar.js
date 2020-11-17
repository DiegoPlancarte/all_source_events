import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

const TopBar = (props) => {

  const {
    sign_in_route,
    sign_out_route,
    sign_up_route,
    logged_in,
    edit_account
  } = props

  return ( 
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#home">All Source Events</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/allvendors">All Vendors</Nav.Link>
          <Nav.Link href="/createvendor">Create Vendor</Nav.Link>
          <NavDropdown title="Favorites" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/my_favorites">All Favorite</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          { logged_in && 
            <Button className="btn bg-white text-secondary" href={sign_out_route}><strong>Sign Out</strong></Button>
          }
          &nbsp;
          { logged_in && 
            <Button className="btn bg-white text-secondary" href={edit_account}><strong>My Account</strong></Button>
          }
          { !logged_in && 
            <Button className="btn bg-white text-secondary" href={sign_in_route}><strong>Log In</strong></Button>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;