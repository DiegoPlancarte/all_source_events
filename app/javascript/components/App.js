import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopBar from "./shared/TopBar"
import AllVendors from "./vendors/AllVendors";
import CreateVendor from "./vendors/CreateVendor";
import VendorInfo from "./vendors/VendorInfo";

class App extends React.Component {
  render () {
    const {
      logged_in,
      current_user,
      sign_in_route,
      sign_out_route,
      sign_up_route,
      edit_account_route,
      csrf_token
    } = this.props
    return (
      <React.Fragment>
        <Router>
          <TopBar sign_in_route={ sign_in_route } sign_up_route={ sign_up_route } logged_in={ logged_in } sign_out_route={ sign_out_route } edit_account={ edit_account_route } />

          <Switch>
            <Route path='/allvendors' render={(props) => <AllVendors {...props} /> }/>
            <Route path ='/vendorinfo/:id' render={(props) => <VendorInfo {...props} current_user= { current_user } csrf_token={ csrf_token } /> }/>
            <Route path ='/createvendor' render={(props) => <CreateVendor {...props} current_user= { current_user } csrf_token={ csrf_token } /> }/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App