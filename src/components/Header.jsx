import React from 'react'

const Header = ({onAdd}) => {
  return (
   <header className='header'>
    <h2>Todo List</h2>
    <button className='header-btn' onClick={onAdd}> <i class="fa-solid fa-circle-plus"></i></button>
   </header>
  )
}

export default Header

