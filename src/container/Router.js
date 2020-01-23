import React from 'react'
import { Route ,Switch, withRouter } from 'react-router-dom';
import Login from './Login';
import User from '../components/Dashboard/User'
import Admin from '../components/Dashboard/Admin'
import Developer from '../components/Dashboard/developer'
import PageNotFound from '../components/PageNotFound'


function Router() {
  return (
<Switch>
<Route exact path="/" component={Login} />
<Route exact path="/dashboard/User" component={User} />
<Route exact path="/dashbord/Admin" component={Admin} />
<Route exact path="/dashboard/Developer" component={Developer} />
<Route exact path="/404" component={PageNotFound} />
<Route exact path="/login" component={Login} />

</Switch> 
  ); 
}

export default withRouter(Router);