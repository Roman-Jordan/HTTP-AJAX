import React from 'react';
import {Route} from 'react-router-dom';
import FriendsList from './components/Friends/Friends';
import axios from 'axios';

export default class App extends React.Component{
  state={
    friends:[]
  }
  
  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(res => {this.setState({friends:res.data})})
      .catch(err =>{console.log('Sorry, you have no friends: ',err)})
  }
  
  render(){
    return (
      <Route exact path='/' render={props => <FriendsList {...props} friends={this.state.friends} />}/>
    )
  }
}


