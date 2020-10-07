import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import axios from 'axios'; 

class App extends Component{
  state = {
    values: []
  }

  componentDidMount(){
    this.setState ({
      values: [{Id:1, Name:"Value 101"}, {Id:2, Name:"Value 102"}, {Id:3, Name:"Value 103"}, {Id:4, Name:"Value 104"},{Id:5, Name:"Value 105"}]
    }) 
    // axios.get('http://localhost:5000/api/values')
    // .then((response)=>{
    //   console.log(response);
    //   this.setState ({
    //     values: response.data
    //   }) 
    // })  
  }


  render(){
    return (
      <div>   
        <Header as='h2'>
    <Icon name='users' />
    <Header.Content>Reactivities</Header.Content>
  </Header>
  <List>
  {this.state.values.map((value: any) =>(
    <List.Item key={value.id} icon='users' content={value.Name} />
          
           ))}
    
  </List>
        
        
      </div>
    );
  }
  
}


export default App;
