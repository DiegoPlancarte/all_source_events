import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from 'images/ASE_Logo.png'

const Loading = () => {
  return (
    <Container>
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
  );
};

export default Loading;