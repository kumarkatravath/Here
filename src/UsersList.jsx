import React from 'react'

const UsersList = () => {
    const users = [
        {id:1,name:"kuku",age:24},
        {id:2,name:"kukuBear",age:25},
        {id:3,name:"kukuMelon",age:26},
    ]

  return (
    
    <div>
        
            
        {users.map(user => (
            <ul>
            <li>
            <div key={user.id}> 
            <h1>Name:{user.name}</h1>
            <h1>Age={user.age}</h1>
            </div>
            </li>
            </ul>
        ))}
        
        
    </div>
    
  )
}

export default UsersList