import React, { Component } from 'react';
import { Layout, Menu} from 'antd'

const { Header} = Layout;
const {SubMenu} = Menu;



 class Head extends Component {

  render() {
    return (
      <div>
       <Header style={{  position: "fixed", zIndex: 1, width: "100%"
      ,height:"80px"}}>
      <div className="logo" />  
       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}
        style={{ 
          lineHeight: "14px",
          marginLeft:"130px",
          marginTop:"30px",
         
          fontSize:"20px",
          //margin:"0px 70px"
        }}>
         <Menu.Item key="1">Home</Menu.Item>
           <SubMenu key="About" title={ <span> About</span> }>
              <Menu.Item key="2">option1</Menu.Item>
              <Menu.Item key="3">option2</Menu.Item>
              <Menu.Item key="4">option3</Menu.Item>
              <Menu.Item key="5">option4</Menu.Item>
           </SubMenu>
         <Menu.Item key="6">Contact Us</Menu.Item>
         
         
        
        </Menu> 
    </Header> 
  ); 
      </div>
    );
  }
}

export default Head;


