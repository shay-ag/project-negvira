import './Header.css'

import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='header1'>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Courses</a>
            <a href='/'>Contact</a>
        </div>
        <div className='header2'>
          Negvira
        </div>
        <div className='header3'>
          <button><i class="fa-solid fa-magnifying-glass"></i> Get Admissions</button>
          <button><i class="fa-solid fa-user"></i> Login</button>
        </div>
    </div>
  )
}

export default Header