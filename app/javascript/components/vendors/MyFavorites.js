import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import useRead from '../hooks/useRead'
import { Container, Row, Col, Card, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import Logo from 'images/ASE_Logo.png'

const MyFavorites = (props) => {

  const [ vendors, setVendors, vendorsLoading, vendorErrors ] = useRead('vendors')
  const [ favorites, setFavorites, favoritesLoading, favoriteErrors ] = useRead('favorites')
  const [ show, setShow ] = useState('All')


  const baker = require('../../../assets/images/baker')
  const caterer = require('../../../assets/images/caterer')
  const florist = require('../../../assets/images/florist')
  const venue = require('../../../assets/images/venue')

  if (vendorsLoading) {
    return <Container>
              <div style={{textAlign: "center"}}>
                <img 
                  id="imageSrc" 
                  src={Logo} 
                  className="img-fluid"
                  width="300"
                  alt="Logo"
                />
                <br/>
                <div >
                  <h1 className="text-primary">Loading...</h1>
                </div>
              </div>
            </Container>
  }

  const favoritesArray = favorites.map(v => {return v.favoritable_id})

  const favoritesList = vendors.filter(v => favoritesArray.includes(v.id))

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
      return favoritesList
    } else if (show === 'Caterer') {
      return favoritesList.filter(v => v.category === 'Caterer')
    } else if (show === 'Baker') {
      return favoritesList.filter(v => v.category === 'Baker')
    } else if (show === 'Venue') {
      return favoritesList.filter(v => v.category === 'Venue')
    } else if (show === 'Florist') {
      return favoritesList.filter(v => v.category === 'Florist')
    }
  }

  return (
    <React.Fragment>
        <Container>
          <h1 className="text-primary" id="header">My Favorites</h1>
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
          <Row xs="1" lg="2" xl="3">
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
        </Container>
    </React.Fragment>
  );
}

export default MyFavorites;