import React from 'react';
import './Main.css'

import {Layout} from 'antd'

const { Content } = Layout;
function Mainemp() {
  return (
    <Content style={{ margin: "86px 5px 0 " }}>
          <div style={{ background: "white", minHeight: 500 }}> 
           < div style={{textAlign:"center"}}> 
             <h1>UserName : User</h1> 
              <h1>Password : user123</h1>
            </div>
          </div> 
        </Content>

  );
}

export default Mainemp;