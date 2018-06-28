import React, { Component } from 'react';
import axios from 'axios';
import NewFriend from './components/NewFriend';
import FriendList from './components/FriendList';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      newFriend: '',
      newAge: 0,
      newEmail: '',
      redirectHome: false
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
      this.setState({ friends: response.data, newFriend: '', newEmail: '', newAge: 0});
    })
    .catch(error => console.error(error));
    console.log('new Friend added');  
  }

  componentDidMount(){
    console.log('Component did mount');
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
      <Switch >
        <Route exact path="/" render={(props) => <FriendList {...props} friends = {this.state.friends}/>}/>
        <Route path="/newfriend" render={(props) => this.state.redirectHome ?  <Redirect to="/" /> :
          <NewFriend {...props}
                    newFriend={this.state.newFriend}
                    newAge={this.state.newAge}
                    newEmail={this.state.newEmail}
                    handleNewFriend = {this.handleNewFriend}
                    addFriend = {this.addFriend}
          /> 
        }/>
        <Route render={() => <div> page not found</div>}/>
      </Switch>
      </div>
    );
  }
}

export default App;
