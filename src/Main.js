import React from 'react';
import Table1 from './components/Table1'
 import Table2 from './components/Table2'
 import Table3 from './components/Table3'
 import Table4 from './components/Table4'

import {Layout} from 'antd'

const { Content } = Layout;
function Main() {
  return (
    <Content style={{ margin: "65px 10px 0 " }}>
          <div style={{ background: "white", minHeight: 260 }}>
              <Table1 />
             <Table2 />
             <Table3 />
             <Table4 />   
           </div> 
        </Content>

  );
}

export default Main;
