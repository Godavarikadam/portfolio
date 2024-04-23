import './Hero.css'
import React from 'react'
import heroImage from './hero.webp';
import {Link} from "react-router-dom"
import { FaLinkedin,FaGithub,FaTwitter } from "react-icons/fa";




const Hero = () => {
  return (
   
    <div className='hero'>
      <img src={heroImage}></img>
      <p>Hello Everyone</p>
            <h1 >I'M GODAVRI KADAM, FRONTEND WEB DEVELOPER !</h1>
            <div className='action'>
              
 <Link to="https://drive.google.com/file/d/1l2dWJMqjTDQfX6_POxojRZouVqxfildT/view?usp=drive_link" className='resume'>Download Resume  </Link>  
 

</div>
<div className='connect'>

<div>
<Link to="https://github.com/Godavarikadam "><FaGithub  className='connect-link'  size={28} style={{color:"black"}}/></Link>
</div>
 
<div>

<Link to="https://www.linkedin.com/in/godavari-kadam-8146a1254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedin className='connect-link'  size={28} style={{color:"black"}}/></Link>
</div>
<div>

<Link to="https://twitter.com/gkadam19?t=8lz1HrkfEJf0rdQWf_vCcQ&s=08 "><FaTwitter className='connect-link' size={28} style={{color:"black"}}/></Link>
</div>




</div>
    </div>
  )
}

export default Hero
