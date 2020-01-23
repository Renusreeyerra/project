import React from 'react';
import './Main.css'
import {Layout} from 'antd'

const { Content } = Layout;
function Maindev() {
  return (
    <Content style={{ margin: "95px 20px 0 " }}>
          <div style={{ background: "white", minHeight: 500 }}> 
           <div className="container">  <p>UserName : Developer</p> 
              <p>Password : dev123</p> </div> 
           </div> 
        </Content>

  );
}

export default Maindev;