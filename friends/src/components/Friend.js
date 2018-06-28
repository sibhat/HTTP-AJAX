import React from 'react';
import axios from 'axios';
import './friend.css'

class Friend extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            friend: this.props.friend,
            showEdit: false,
            editFriend: Object.assign({}, this.props.friend)
        }
    }
    editFriend = (e) =>{
        this.setState({showEdit: true});
    }
    updateFriend = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:5000/friends/${this.state.friend.id}`, {
            name: this.state.editFriend.name,
            age: this.state.editFriend.age,
            email: this.state.editFriend.email,
        })
        .then(response => {
            let newObj;
            response.data.forEach(friend =>  friend.id === this.state.friend.id ? newObj = Object.assign({}, friend) : null);
            this.setState({friend: newObj, showEdit: false});
        })
        .catch(error => console.log(error));
    }
    handleChange = (e) =>{
        let newObj = Object.assign({}, this.state.editFriend)
        newObj[e.target.name] = e.target.value
        this.setState({ editFriend: newObj })
    }

    render(){ 
        const friend = <p > <span className="name">{this.state.friend.name} </span> <span className="age"> {this.state.friend.age} </span> <span className="email">{this.state.friend.email}</span> </p>;
        const editFriend = <form onSubmit={this.updateFriend}>
                                <input type="text" name="name" id="name" placeholder={this.state.friend.name} value={this.state.editFriend.name} onChange={this.handleChange}/>
                                <input type="number" name="age" id="number" min="1" max="100" placeholder='age' value={this.state.editFriend.age} onChange={this.handleChange}/>
                                <input type="email" name="email" id="email" placeholder={this.state.friend.email} value={this.state.editFriend.email} onChange={this.handleChange}/>
                                <input type="submit" value="Submit"/>
                            </form>
        return (
            <div className="friend" onClick={this.editFriend}>
                {this.state.showEdit ? editFriend : friend}
            </div>
        );
    }
  }


export default Friend;
