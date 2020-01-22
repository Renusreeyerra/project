import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import Head from '../Layout/Head'
import Side from '../Layout/Side'
import Foot from '../Layout/Foot'
import Mainadm from '../Layout/Main/Mainadm'


function Admin(props) {
 
  return (
  <Layout>
    <Head />
    <Side />
   <Layout style={{ marginLeft: 200 }}> 
      <Mainadm />
      <Foot />
    </Layout> 
</Layout>
  );
}

export default Admin;
