import React from 'react'

const UserStatus = (props) => {
    if(props.loggedIn && props.IsAdmin){
        return <h1>UserStatus--welcome Admin</h1>}
        else{
            return <h1> welcome user</h1>
        }
  
  
} 


export default UserStatus