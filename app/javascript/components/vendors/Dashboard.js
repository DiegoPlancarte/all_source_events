import React from 'react';
import { Link } from 'react-router-dom'
import useRead from '../hooks/useRead'
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

const Dashboard = (props) => {

  const [ vendors, setVendors, vendorsLoading, vendorErrors ] = useRead('vendors')
  const [ favorites, setFavorites, favoritesLoading, favoriteErrors ] = useRead('favorites')

  const baker = require('../../../assets/images/baker')
  const caterer = require('../../../assets/images/caterer')
  const florist = require('../../../assets/images/florist')
  const venue = require('../../../assets/images/venue')

  if (vendorsLoading) {
    return <div><Spinner animation="border" variant="primary" />Loading...</div>
  }

  const favoritesArray = favorites.map(v => {return v.favoritable_id})

  const favoritesList = vendors.filter(v => favoritesArray.includes(v.id))

  const myVendors = vendors.filter(v => {return v.user_id === props.current_user.id})


  return (
    <React.Fragment>
        <Container>
          <h1 className="text-primary" id="header">My Dashboard</h1>
          <hr/>
          <h2 className="text-secondary" id="header">My Favorites</h2>
          <Row md="1" lg="2" xl="3">
            {favoritesList.map((v,i)=> {
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
                        <Link to={`/vendorinfo/${v.id}`} >
                          <Button className="text-white">Details</Button>
                        </Link>
                      </Card.Body>
                      <Card.Footer>{v.city}, {v.state} {v.zip}</Card.Footer>
                    </Card>
                  </Col>
            )})}
          </Row>
          <hr/>
          <h2 className="text-secondary" id="header">My Vendors</h2>
          <Row md="1" lg="2" xl="3">
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
                      <Card.Img className="img-fluid" src={imageName()}/>
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
          <hr/>
        </Container>
    </React.Fragment>
  );
}

export default Dashboard;