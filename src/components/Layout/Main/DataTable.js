import React, { Component } from 'react';
import {Table} from 'antd'

class DataTable extends Component {
constructor(props) {
  super(props)
   this.state = {
     posts:[]
     
    }
}
componentDidMount() {
fetch('https://jsonplaceholder.typicode.com/posts',
{method:"GET"})
.then(response => response.json())
.then((posts => {
    this.setState({posts:posts})
    //console.log(this.state.posts)
}))}

  render(){
    const columns = [
      {
        title: 'userId',
        dataIndex: 'userId',
      },
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: 'title',
        dataIndex: 'title',
      },
      {
        title: 'body',
        dataIndex: 'body',
      },
    ];  
    return (
      
         <Table stripped hover bordered 
          size="small"
          columns={columns}
          dataSource={this.state.posts}
          rowKey="id"
         style={{
        maxWidth:"480px",
        display:"inline-block",
        margin:"35px",
        
         }}>
        </Table> 
        
    );
  }
}

export default DataTable;
