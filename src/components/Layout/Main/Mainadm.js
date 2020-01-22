import React from 'react';
import './Main.css'

import {Layout} from 'antd'

const { Content } = Layout;
function Mainadm() {
  return (
    <Content style={{ margin: "75px 20px 0 " }}>
          <div style={{ background: "white", minHeight: 500 }}> 
           <div className="container">  <p>UserName : Admin</p> 
              <p>Password : adm123</p> </div> 
           </div> 
        </Content>

  );
}

export default Mainadm;