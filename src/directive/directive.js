import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './directive.css'

const Navigate = () => {
  const [sticky, setSticky] = useState (false);

  useEffect(() => {
    const handleScroll = () => {
        setSticky(window.scrollY >200)
    }
    window.addEventListener ('scroll', handleScroll)
    return () => window.removeEventListener ('scroll', handleScroll)

  })


  return (
    <div className={'sticky ? "sticky" : " "'}>
    <div className='container-navbar'>
      <h1 className='logo'>The Crapty</h1>
      <nav className='navbar'>
        <Link to='/'><li>Beranda</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/blog'><li>Blog</li></Link>
        <Link to='/contact'><li>Contact</li></Link>

        <button className='btn-daftar'>Daftar</button>

      </nav>
     
    </div>
    </div>
  )
}

export default Navigate