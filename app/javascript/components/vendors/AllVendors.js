import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import useRead from '../hooks/useRead'
import { Container, Row, Col, Card, ButtonToolbar, ButtonGroup, Button, Spinner } from 'react-bootstrap';

const AllVendors = (props) => {

  const [ vendors, setVendors, vendorsLoading, vendorErrors ] = useRead('vendors')
  const [ show, setShow ] = useState('All')

  const baker = require('../../../assets/images/baker')
  const caterer = require('../../../assets/images/caterer')
  const florist = require('../../../assets/images/florist')
  const venue = require('../../../assets/images/venue')

  if (vendorsLoading) {
    return <div><Spinner animation="border" variant="primary"/>Loading...</div>
  }

  const showAll = () => {
    setShow('All')
  }

  const showCaterers = () => {
    setShow('Caterer')
  }

  const showBakers = () => {
    setShow('Baker')
  }

  const showVenues = () => {
    setShow('Venue')
  }

  const showFlorists = () => {
    setShow('Florist')
  }

  const filterShow = () => {
    if (show === 'All') {
      return vendors
    } else if (show === 'Caterer') {
      return vendors.filter(v => v.category === 'Caterer')
    } else if (show === 'Baker') {
      return vendors.filter(v => v.category === 'Baker')
    } else if (show === 'Venue') {
      return vendors.filter(v => v.category === 'Venue')
    } else if (show === 'Florist') {
      return vendors.filter(v => v.category === 'Florist')
    }
  }

  return (
    <React.Fragment>
        <Container>
          <h1 className="text-primary" id="header">All Vendors</h1>
          <hr/>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <ButtonToolbar className="justify-content-center" aria-label="Toolbar with Button groups">
                <ButtonGroup aria-label="Basic example" >
                  <Button className="btn btn-secondary text-white md-px-4" onClick={showAll} >All</Button>
                  <Button className="btn btn-secondary text-white md-px-4" onClick={showCaterers} >Caterers</Button>
                  <Button className="btn btn-secondary text-white md-px-4" onClick={showBakers} >Bakers</Button>
                  <Button className="btn btn-secondary text-white md-px-4" onClick={showVenues} >Venues</Button>
                  <Button className="btn btn-secondary text-white md-px-4" onClick={showFlorists} >Florists</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row xs={1}>
            {filterShow().map((v,i)=> {
                let imageName = () => {
                  if (v.category === 'Baker') {
                    return `${baker}`
                  } else if (v.category === 'Caterer') {
                    return `${caterer}`
                  } else if (v.category === 'Florist') {
                    return `${florist}`
                  } else if (v.category === 'Venue') {
                    return `${venue}`
                  }
                }
                return (
                  <Col key={v.id} className="vendor-cards">
                    <Card border="light" className="shadow">
                    <Row xs={2} md={1}>
                      <Col xs={12} lg={4}>
                        <Card.Img className="img-fluid" src={imageName()}/>
                      </Col>
                      <Col xs={12} lg={8}>
                        <Card.Body>
                          <Card.Title><strong>{v.name}</strong></Card.Title>
                          <Card.Text>{v.category}</Card.Text>
                          <Card.Text>{v.city}, {v.state} {v.zip}</Card.Text>
                          <Card.Text className="text-truncate">{v.description}</Card.Text>
                          { props.logged_in
                          ? <Link to={`/vendorinfo/${v.id}`} className="text-white btn btn-primary">Details</Link>
                          : <Button className="text-white btn btn-primary" href={props.sign_in_route}>Details</Button> }
                        </Card.Body>
                      </Col>
                    </Row>
                    </Card>
                  </Col>
            )})}
          </Row>
        </Container>
    </React.Fragment>
  );
}

export default AllVendors;