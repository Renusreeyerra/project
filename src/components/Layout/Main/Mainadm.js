import React from 'react';
import {Layout} from 'antd'
import DataTable from './DataTable'

const { Content } = Layout;
 
function Mainadm() {
  return (
    <Content style={{ margin: "86px 5px 0 " }}>
      <div style={{ background: "white", minHeight: 500 }}> 
         <h1>Data Tables</h1>
          <DataTable  />
          <DataTable   />
          <hr></hr>
          <DataTable   />
          <DataTable   />
        </div> 
      </Content>

  );
}

export default Mainadm;