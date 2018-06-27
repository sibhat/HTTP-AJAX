import React from 'react';

const NewFriend = ({newFriend, addFriend, handleNewFriend, newEmail, newAge}) =>{ 
    return (
      <div className="app__newFriend">
      <form onSubmit={e => {e.preventDefault();
                              addFriend()}}
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
               <input type="submit" value="Save"/>
      </form>
      </div>
    );
  }


export default NewFriend;
