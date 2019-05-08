import React from 'react';
import {Route} from 'react-router-dom';
import FriendsList from './components/Friends/Friends';
import AddFriend from './components/Friends/AddFriend'
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
      <>
      <header>
        <h1>My Friends</h1>
        <Route path='/' render={props => <AddFriend />}/>
      </header>
      <Route path='/?:id' render={props=><AddFriend />}/>
      <Route path='/' render={props => <FriendsList {...props} friends={this.state.friends} />}/>
      </>
    )
  }
}


