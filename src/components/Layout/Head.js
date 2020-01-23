import React, { Component } from 'react';
import logo from './logo.png'
import { Layout, Menu} from 'antd';
import {withRouter} from 'react-router'
const { Header} = Layout;
const {SubMenu} = Menu;

class Head extends Component{
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    console.log('Logged Out');
    this.props.history.push('/login')
  }
     render(){
    return (
    
        <Header style={{ 
          position: "fixed",
          zIndex: 1, 
          width: "100%",
          height:"85px"
          }}>
        <div className="logo">
          <img src ={logo} alt="logo" 
          style={{
          width: "90px",
          height: "55px",
          float: "left",
          marginTop:"-7px",
          marginBottom:"10px",
        
        }} />        
           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}
        style={{ 
          width:"82%",
          lineHeight: "35px",
          marginLeft:"150px",
          marginTop:"23px",
          marginBottom: "5px",
          fontSize:"20px",
        
        }}>
      
         <Menu.Item key="1">Home</Menu.Item>
           <SubMenu key="About" title={ <span> About</span> }>
              <Menu.Item key="2">option1</Menu.Item>
              <Menu.Item key="3">option2</Menu.Item>
              <Menu.Item key="4">option3</Menu.Item>
              <Menu.Item key="5">option4</Menu.Item>
           </SubMenu>
         <Menu.Item key="6">Contact Us</Menu.Item>
         <Menu.Item key="7"
          style={{

          }}
           onClick={this.onClick}>
           Logout
           </Menu.Item>
      </Menu> 
      </div>
    </Header> 
  ); 
     
  }
}

export default withRouter(Head);


