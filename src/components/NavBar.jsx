import React from 'react'
import { Link } from 'react-router-dom'
import Header from './../components/Header.jsx'

function NavBar() {
  return (
    <div style={{textAlign:"center"}}>
        <h4>
            <Link to="/" style={{textDecoration:"none"}}>Login</Link>
            <span style={{margin: "0 10px"}}>|</span>
            <Link to="/home" style={{textDecoration:"none"}}>Home</Link>
            <span style={{margin: "0 10px"}}>|</span>
            <Link to="/about" style={{textDecoration:"none"}}>About</Link>
            <span style={{margin: "0 10px"}}>|</span>
            <Link to="/wow/contact" style={{textDecoration:"none"}}>Contact</Link>
            <span style={{margin: "0 10px"}}>|</span>
            <Link to="/sau/dti/regis" style={{textDecoration:"none"}}>Register</Link>
        </h4>
        <Header/>
    </div>
  )
}

export default NavBar
