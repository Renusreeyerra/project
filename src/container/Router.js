import React from 'react'
import { Route ,Switch, withRouter } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';


function Router() {
  return (
<Switch>
  <Route exact strict path="/" component={Login} />
  <Route exact strict path="/dashboard" component={Dashboard} />
 </Switch> 
  ); 
}

export default withRouter(Router);