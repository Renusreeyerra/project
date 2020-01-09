import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import Head from './Head'
import Side from './Side'
import Main from './Main'
import Foot from './Foot'


function App() {
  return (
  <Layout>
    <Head />
    <Side />
   <Layout style={{ marginLeft: 200 }}> 
      <Main />
      <Foot />
    </Layout> 
</Layout>
  );
}

export default App;




