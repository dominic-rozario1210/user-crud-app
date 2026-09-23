import React, { useState } from 'react'

const AddUser = ({ onClose, onAdd }) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    mobileNum: ""
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const handleAdd = () => {
    if (!user.name.trim()) return
    onAdd(user)

    setUser({
      name: "",
      age: "",
      email: "",
      mobileNum: ""

    })

    onClose();
  };
  return (

    <div className='add-user-form'>
      <button
        className="close-btn"
        onClick={onClose}
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
      <h2>Add User</h2>
      <input type="text"
        name="name"
        value={user.name}
        placeholder='Enter Name'
        onChange={handleChange}
      />
      <input type="number"
        name="age"
        value={user.age}
        placeholder='Enter Age'
        onChange={handleChange}
      />
      <input type="email"
        name="email"
        value={user.email}
        placeholder='Enter email'
        onChange={handleChange}
      />
      <input type="number"
        name='mobileNum'
        value={user.mobileNum}
        placeholder='Enter Mobile Number'
        onChange={handleChange}
      />
    
      <button className='add-btn'  onClick={handleAdd}>Add</button>
      
    </div>
  )
}

export default AddUser
