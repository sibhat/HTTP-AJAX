import React, { Component } from 'react';
import axios from 'axios';
import Friend from './components/Friend';
import NewFriend from './components/NewFriend';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      newFriend: '',
      newAge: 0,
      newEmail: ''
    };
    
  }
  handleNewFriend = (e) =>{
    this.setState({[e.target.name]: e.target.value});
  }
  addFriend = () =>{
    axios.post('http://localhost:5000/friends',{
      name: this.state.newFriend,
      age: this.state.newAge,
      email: this.state.newEmail
    })
    .then(response => {
      this.setState({ friends: response.data});
      console.log(response)
    })
    .catch(error => console.error(error));
    console.log('new Friend added');
  }
  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then( response => (
      this.setState({ friends: response.data})
    ))
    .catch(error => console.error(error));
  }
  render() {
    return (
      <div className="App">
      <NewFriend newFriend={this.state.newFriend}
                 newAge={this.state.newAge}
                 newEmail={this.state.newEmail}
                 handleNewFriend = {this.handleNewFriend}
                 addFriend = {this.addFriend}
      />
      {this.state.friends.map( friend => 
        <Friend key={friend.id} friend={friend}/>
      )}
      </div>
    );
  }
}

export default App;
