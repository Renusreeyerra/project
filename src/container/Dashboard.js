import React from 'react';
import Admin from '../components/Dashboard/Admin';
import Developer from '../components/Dashboard/developer';
import User from '../components/Dashboard/User';


function Dashboard() {
  return (
    <div>
      <Admin />
      <Developer />
      <User />
    </div>
  );
}

export default Dashboard;
