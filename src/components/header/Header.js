import React from 'react'
import './header.css'
import logo from '../../logo.svg';

function Header() {
  const [state, setState] = React.useState({clicked: false})
  const handleClick = () => {
    setState({clicked: !state.clicked})
  }
  return (
    <header className='flex'>
      <div className='container flex'>
        <a href='index.html' className='logo'>
            <img src={logo} alt='logo' />
        </a>
        <nav>
            <div className='mobile' onClick={handleClick}>
              <i id='bar' className={state.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' }></i>
            </div>
            <ul id='navbar' className={state.clicked ? "#navbar active": "#navbar"}>
                <li><a href='index.html'>About</a></li>
                <li><a href='index.html'>Careers</a></li>
                <li><a href='index.html'>Events</a></li>
                <li><a href='index.html'>Products</a></li>
                <li><a href='index.html'>Support</a></li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
