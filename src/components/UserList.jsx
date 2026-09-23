import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'

const UserList = ({onDelete,onUpdate}) => {
    const users = useSelector((state) => state.users.users )
  return (
    <div className='card-container'>
      
      {
        users.map((user) => (
            <UserCard 
               key={user.id}
               user={user}
               onDelete={onDelete}
               onUpdate={onUpdate}
             />  
        ))
      }
    </div>
  )
}

export default UserList
