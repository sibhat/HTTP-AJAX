import React from 'react';
import './friend.css'
import { Link } from 'react-router-dom';
const NewFriend = ({newFriend, addFriend, handleNewFriend, history, newEmail, newAge}) =>{ 
  const redirectToTarget = () => {
    history.push(`/`)
  }
    return (
      <div className="newFriend">
      <form onSubmit={e => {e.preventDefault();
                              addFriend()
                              redirectToTarget()
                              }}

                            >
        <input type="text" 
                name="newFriend" 
                placeholder='add friend...'
                onChange={handleNewFriend}
                value={newFriend}
                autoComplete="off"
                required
                />
        <input type="number"
               name="newAge" 
               min="1" 
               max="100" 
               placeholder='age'
               onChange={handleNewFriend}
               value={newAge}/>
        <input type="email" 
               name="newEmail" 
               id=""  
               placeholder ="Email"
               onChange={handleNewFriend}
               value={newEmail}
               required/>
        <input type="submit" value="Save" className="btn__save"/>
      </form>
        <Link to='/'>cancle</Link>
      </div>
    );
  }


export default NewFriend;
