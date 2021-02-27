import React from 'react';
import { Link } from 'react-router-dom'
import useRead from '../hooks/useRead'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Loading from '../shared/Loading';

const MyVendors = (props) => {

  const [ vendors, setVendors, vendorsLoading, vendorErrors ] = useRead('vendors')

  const myVendors = vendors.filter(v => {return v.user_id === props.current_user.id})

  const baker = require('../../../assets/images/baker')
  const caterer = require('../../../assets/images/caterer')
  const florist = require('../../../assets/images/florist')
  const venue = require('../../../assets/images/venue')

  if (vendorsLoading) {
    return (<Loading/>)
  }

  console.log(vendors)

  return (
    <React.Fragment>
        <Container>
          <h1 className="text-primary" id="header">My Vendors</h1>
          <hr/>
          <Row xs="1" lg="2" xl="3">
            {myVendors.map((v,i)=> {
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
                      { v.photo_url 
                      ? <Card.Img className="img-fluid" src={v.photo_url}/>
                      : <Card.Img className="img-fluid" src={imageName()}/>}
                      <Card.Body>
                        <Card.Title><strong>{v.name}</strong></Card.Title>
                        <Card.Text>{v.category}</Card.Text>
                        <Link to={`/vendorinfo/${v.id}`} >
                          <Button className="text-white">Details</Button>
                        </Link>
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

export default MyVendors;