import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {

        const [click, setclick]= useState(false);
        const handleclick= () => setclick(!click);
  return (
    <div className='navbar'>
        <h1 style={{marginLeft: '1rem', color: '#00d8ff'}}>Defi</h1>
        <ul className={click ? 'nav active' : 'nav'}>
            <li className='nav-item'>
                    <a href='/'>Platform</a>
            </li>
            <li className='nav-item'>
                    <a href='/'>Developers</a>
            </li>
            <li className='nav-item'>
                    <a href='/'>Community</a>
            </li>
            <li className='nav-item'>
                    <a href='/'>About</a>
            </li>
            <li className='nav-item'>
                    <a className='btn' href='/'>Use Defi</a>
            </li>
        </ul>
        <div onClick={handleclick} className='hamburger'>
        {click ? (<AiOutlineClose className='icon'/>) : (<AiOutlineMenu className='icon' />)}
        </div>
    </div>
  )
}

export default Navbar