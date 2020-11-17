import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import useCreate from '../hooks/useCreate'
import useForm from '../hooks/useForm'

const CreateVendor = (props) => {

  const [ createVendor ] = useCreate('vendors', props, 'allvendors')
  const [ vendor, setVendor ] = useState({})
  // const [ vendor, handleInputChange, handleSubmit ] = useForm()

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    createVendor(vendor)
  }
  
  const handleInputChange = (event) => {
    event.persist();
    setVendor(vendor=>({...vendor, user_id: props.current_user.id }))
    setVendor(vendor => ({...vendor, [event.target.name]: event.target.value}));
  }

  return(
    <React.Fragment>
      <Container sm={6} id="form">
        <h1 className="text-primary" id="header">Add New Vendor!</h1>
        <hr/>
      <Form>
        <Row xs="1" lg="2">
          <Col xs="12" lg="9">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" 
                            name="name" 
                            value={ vendor.name || '' } 
                            onChange={ handleInputChange } 
                            placeholder="Enter name" />
            </Form.Group>
          </Col>
          <Col xs="12" lg="3">
            <Form.Group controlId="category">
              <Form.Label>Type of Vendor</Form.Label>
              <Form.Control
                as="select"
                name="category"
                onChange={ handleInputChange }
                value={ vendor.category }
                placeholder="Select an option">
                  <option defaultValue>Chose Type</option>
                  <option value="Catering">Catering</option>
                  <option value="Venue">Venue</option>
                  <option value="Florist">Florist</option>
                  <option value="Baker">Baker</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row xs="2" lg="4">
            <Col xs="8" lg="5">
              <Form.Group controlId="address">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  onChange={ handleInputChange }
                  value={ vendor.address || ''}
                  placeholder="Enter Street Address"
                />
              </Form.Group>
            </Col>
            <Col xs="4" lg="3">
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  onChange={ handleInputChange }
                  value={ vendor.city || ''}
                  placeholder="City"
                />
              </Form.Group>
            </Col>
            <Col xs="6" lg="2">
              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  name="state"
                  onChange={ handleInputChange }
                  value={ vendor.state || ''}
                  placeholder="State">
                    <option defaultValue>State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </Form.Control>
              </Form.Group>
            </Col>
          <Col xs="6" lg="2">
            <Form.Group controlId="zip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                name="zip"
                onChange={ handleInputChange }
                value={ vendor.zip || ''}
                placeholder="Zip Code"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row xs="2" lg="1">
          <Col xs="12" lg="6">
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                onChange={ handleInputChange }
                value={ vendor.phone || ''}
                placeholder="Business Phone Number"
              />
            </Form.Group>
          </Col>
          <Col xs="12" lg="6">
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={ handleInputChange }
              value={ vendor.email || ''}
              placeholder="Email Address"
            />
          </Form.Group>
          </Col>
        </Row>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              onChange={ handleInputChange }
              value={ vendor.description || ''}
              placeholder="Business Description"
            />
          </Form.Group>
      </Form>
          <Button className="btn btn-primary text-white" onClick={ handleSubmit }>
            Submit
          </Button>
        </Container>
    </React.Fragment>
    )
  }


export default CreateVendor;