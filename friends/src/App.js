//Dependencies
import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
//Components
import FriendsList from './components/Friends/Friends';
import FriendForm from './components/Friends/FriendForm';
//Styles
import {Header} from './components/Friends/styleFriends';

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

  toggle = e =>{
    const location = '/FriendsForm';
    e.target.classList.toggle('active');
    window.history.pushState('FriendsForm', 'Title', location);
  }
  
  render(){
    return (
      <>
      <Header>
        <h1>Lambda <i className="fas fa-link"></i></h1>
        <button onClick={this.toggle} to='/FriendForm '>+</button>
      </Header>
      <Route path='/FriendForm' render={props=><FriendForm {...props}/>}/>
      <Route path='/' render={props => <FriendsList {...props} friends={this.state.friends} />}/>
      </>
    )
  }
}


