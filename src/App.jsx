import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import "./App.css"
import { addUser, deleteUser, getUsers, updateUser } from './redux/UserSlice';

const App = () => {

  const dispatch = useDispatch();

  const[showForm,setShowForm]=useState(false);

  const handleAddUser = async(user) => {
    try {
      const response = await axios.post("/users",user)
      dispatch(addUser(response.data))
      
    } catch (error) {
      console.log(error);
      
    }
    
  }

  const fetchUsers = async (user) => {
    try {
      const response = await axios.get("/users",user)
      dispatch(getUsers(response.data))
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleDeleteUser = async (id) =>{
    try {
      const response = await axios.delete(`/users/${id}`)
      dispatch(deleteUser(id))
    } catch (error) {
      console.log(eoor);
      
    }
  }

  const handleUpdateUser = async (user) => {
    try {
      const response = await axios.put(
        `/users/${user.id}`,user
      )
      dispatch(updateUser(response.data))
    } catch (error) {
      console.log(error);
      
    }
  }
  
  useEffect(() => {
    fetchUsers();
  },[])
  return (
    <div>
      <Header
        onAdd={() => setShowForm(true)}
        
      />
      {
        showForm && (
          <AddUser
             onClose={() => setShowForm(false)}
             onAdd={handleAddUser}
             
          />
        )

      }
      <UserList 
         onDelete={handleDeleteUser}
         onUpdate={handleUpdateUser}
         
      />

    </div>
  )
}

export default App
