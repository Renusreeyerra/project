import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import Head from '../Layout/Head'
import Side from '../Layout/Side'
import Maindev from '../Layout/Main/Maindev'
import Foot from '../Layout/Foot'


function Developer(props) {
 
  return (
  <Layout>
    <Head />
    <Side />
   <Layout style={{ marginLeft: 200 }}> 
      <Maindev  />
      <Foot />
    </Layout> 
</Layout>
  );
}

export default Developer;
