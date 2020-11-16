import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopBar from "./shared/TopBar"

class App extends React.Component {
  render () {
    const {
      logged_in,
      current_user,
      sign_in_route,
      sign_out_route,
      sign_up_route,
      edit_account_route,
      token
    } = this.props
    return (
      <React.Fragment>
        <Router>
          <TopBar sign_in_route={ sign_in_route } sign_up_route={ sign_up_route } logged_in={ logged_in } sign_out_route={ sign_out_route } edit_account={ edit_account_route } />

          <Switch>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App