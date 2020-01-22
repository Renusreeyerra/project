import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import Head from '../Layout/Head'
import Side from '../Layout/Side'
import Mainuser from '../Layout/Main/Mainuser'
import Foot from '../Layout/Foot'


function User(props) {
 
  return (
  <Layout>
    <Head />
    <Side />
   <Layout style={{ marginLeft: 200 }}> 
      <Mainuser />
      <Foot />
    </Layout> 
</Layout>
  );
}

export default User;
