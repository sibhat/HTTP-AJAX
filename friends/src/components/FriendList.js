import React from 'react';
import Friend from './Friend';
import {Link} from 'react-router-dom';
import './friend.css'

const FriendList = ({friends}) =>{ 
    return (
      <div className="friends" >
        <Link to="/newfriend" className="btn__add"> Add Friend </Link>
        {friends.map( friend => <Friend key={friend.id} 
                                        friend={friend} 
                                />)}
      
      </div>

    )
  }


export default FriendList;
