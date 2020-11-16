import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import useRead from '../hooks/useRead'

const AllVendors = () => {

  const [ vendors, setVendors, vendorsLoading, vendorErrors ] = useRead('vendors')

  if (vendorsLoading) {
    return <div><Spinner animation="border" variant="primary" />Loading...</div>
  }

  return (
    <React.Fragment>
      { vendors.map((v,i) => {
        return (
          <div key={i}>
            <Link to={`/iteminfo/${v.id}`}>{v.name}</Link>
            <p>{v.user_id}</p>
          </div>
        )
      })}
    </React.Fragment>
  );
}

export default AllVendors;