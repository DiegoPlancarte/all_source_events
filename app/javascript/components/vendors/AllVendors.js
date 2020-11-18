import React from 'react';
import { Link } from 'react-router-dom'
import useRead from '../hooks/useRead'
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

const AllVendors = (props) => {

  const [ vendors, setVendors, vendorsLoading, vendorErrors ] = useRead('vendors')

  const baker = require('../../../assets/images/baker')
  const caterer = require('../../../assets/images/caterer')
  const florist = require('../../../assets/images/florist')
  const venue = require('../../../assets/images/venue')

  if (vendorsLoading) {
    return <div><Spinner animation="border" variant="primary"/>Loading...</div>
  }

  console.log(vendors)

  return (
    <React.Fragment>
        <Container>
          <h1 className="text-primary" id="header">All Vendors</h1>
          <hr/>
          <Row xs={1} lg={2} xl={3}>
            {vendors.map((v,i)=> {
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
                      <Card.Img className="img-fluid" src={imageName()}/>
                      <Card.Body>
                        <Card.Title><strong>{v.name}</strong></Card.Title>
                        <Card.Text>{v.category}</Card.Text>
                        { props.logged_in
                        ? <Link to={`/vendorinfo/${v.id}`} className="text-white btn btn-primary">Details</Link>
                        : <Button className="text-white btn btn-primary" href={props.sign_in_route}>Details</Button> }
                      </Card.Body>
                      <Card.Footer>{v.city}, {v.state} {v.zip}</Card.Footer>
                    </Card>
                  </Col>
            )})}
          </Row>
        </Container>
    </React.Fragment>
  );
}

export default AllVendors;