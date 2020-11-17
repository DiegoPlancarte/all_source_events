import React from 'react';
import { Link } from 'react-router-dom'
import useRead from '../hooks/useRead'
import useCreate from '../hooks/useCreate'
import useDelete from '../hooks/useDelete'
import { Row, Col, CardDeck, Card, Container, Button } from 'react-bootstrap';

const VendorInfo = (props) => {

  const [ vendor, setVendor, vendorLoading, vendorErrors ] = useRead(`vendors/${props.match.params.id}`)
  const [ favorites, setFavorites, favoritesLoading, favoriteErrors ] = useRead('favorites')
  const [ createFavorite ] = useCreate('favorites', props, 'refresh')
  const [ deleteVendor ] = useDelete(`vendors/${props.match.params.id}`, props, 'allvendors')

  const deleteFavorite = ()=> {
		return fetch(`/favorites/${favorited.id}` ,{
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': props.csrf_token
      },
			method: 'DELETE'
		})
		.then((response)=> {
			if(response.ok){
        alert('This vendors has been removed from your favorites!')
        window.location.reload(false)
			}
		})
	}

  if (vendorLoading && favoritesLoading) {
    return <div>Loading...</div>
  }

  const favorited = favorites.find(v => v.favoritable_id === vendor.id);

  const favoriteButton = () => {
    if (favorited) {
      return (
        <Button onClick={deleteFavorite}>Unfavorite</Button>
      )
    } return (
      <Button onClick={handleFavorite}>Favorite</Button>
      )
  }

  const creator = () => {
    return props.current_user.id === vendor.user_id
  }

  const handleFavorite = () => {
    const favoriteTemplate = {favoritable_type: 'Vendor', favoritor_type: 'User' }; 
    const value =  { favoritor_id: props.current_user.id, favoritable_id: vendor.id }; 
    createFavorite({...favoriteTemplate, ...value})
  }

  const baker = require('../../../assets/images/baker')
  const caterer = require('../../../assets/images/caterer')
  const florist = require('../../../assets/images/florist')
  const venue = require('../../../assets/images/venue')

  let imageName = () => {
    if (vendor.category === 'Baker') {
      return `${baker}`
    } else if (vendor.category === 'Caterer') {
      return `${caterer}`
    } else if (vendor.category === 'Florist') {
      return `${florist}`
    } else if (vendor.category === 'Venue') {
      return `${venue}`
    }
  }

  return (
    <React.Fragment>
        <Container>
          <h1 className="text-primary" id="header">Vendor Details</h1>
          <hr/>
          { vendor && 
            <CardDeck>
              <Card border="light" className="shadow">
                <Row md={1} lg={2}>
                  <Col>
                    <Card.Img className="img-fluid" src={imageName()}/>
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Text className="text-center"> {vendor.category}</Card.Text>
                      <Card.Text className="text-center"> {vendor.name} </Card.Text>
                      <Card.Text className="text-center"> {vendor.city}, {vendor.state} {vendor.zip}</Card.Text>
                      <Card.Text className="text-center"> <em>Phone:</em> {vendor.phone}</Card.Text>
                      <Card.Text className="text-center"> <em>Email:</em> {vendor.email} </Card.Text>
                      <Card.Text className="text-center"> <em>Description:</em> {vendor.description} </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
                <div className="py-3">
                {creator() && 
                  <div className="text-center">
                  <Link to="/allvendors" className= "btn btn-danger" onClick={ deleteVendor } >Delete Listing</Link>
                  &nbsp;
                  <Link to={`/editvendor/${vendor.id}`} className= "btn btn-info">Edit Listing</Link>
                  </div>
                }
                </div>
              </Card>
            </CardDeck>
          }
        </Container>
    </React.Fragment>
  )
}

export default VendorInfo;