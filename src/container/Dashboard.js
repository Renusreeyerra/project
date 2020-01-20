import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import Head from '../components/Head'
import Side from '../components/Side'
import Main from '../components/Main'
import Foot from '../components/Foot'


function Dashboard() {
  return (
  <Layout>
    <Head />
    <Side />
   <Layout style={{ marginLeft: 200 }}> 
      <Main  />
      <Foot />
    </Layout> 
</Layout>
  );
}

export default Dashboard;
