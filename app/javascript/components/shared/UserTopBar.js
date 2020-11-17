import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

const UserTopBar = (props) => {

  const {
    sign_out_route,
    edit_account
  } = props

  return ( 
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="/">All Source Events</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/allvendors">All Vendors</Nav.Link>
          <Nav.Link href="/myvendors">My Vendors</Nav.Link>
          <Nav.Link href="/createvendor">Create Vendor</Nav.Link>
          <NavDropdown title="Favorites" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/myfavorites">All Favorite</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Button className="btn bg-white text-secondary" href={sign_out_route}><strong>Sign Out</strong></Button>
          &nbsp;
          <Button className="btn bg-white text-secondary" href={edit_account}><strong>My Account</strong></Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UserTopBar;