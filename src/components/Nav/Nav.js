import React, { useState, useRef  } from 'react';

import './Nav.css'
import {Link} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"


const Nav = () => {

    const [menu,setMenu]=useState("home");
    const menuRef=useRef();
    const openIcon=()=>{
        menuRef.current.style.right="0"
    }

    const closeIcon=()=>{
        menuRef.current.style.right="-350px"
    }


  return(

<div className='navbar'>
<div className='header'>
    <Link to="/">
       <h1>GODAVARI KADAM</h1>
       </Link>
<FaBars  className="open"  onClick={openIcon} size={25} style={{color:"yellow"}}/>
<ul ref={menuRef} className='nav-menu'>
    <FaTimes onClick={closeIcon} size={25} style={{color:"black"}} className='close' />

    
    <li onClick={()=>{setMenu("home")}}>
    <Link to="/" className='link'>Home
      </Link>{menu==='home'?<hr/>:<></>}
    </li>

    <li onClick={()=>{setMenu("about")}}>
    <Link to="/about" className='link'>About</Link>{menu==='about'?<hr/>:<></>}
    </li>

    <li onClick={()=>{setMenu("project")}}>
    <Link to="/project" className='link'>Project</Link>{menu==='project'?<hr/>:<></>}
    </li>
    <li onClick={()=>{setMenu("contact")}}>
    <Link to="/contact" className='link'>Contact
</Link>{menu==='contact'?<hr/>:<></>}
    </li>
</ul>
</div>
</div>
 )
}

export default Nav
