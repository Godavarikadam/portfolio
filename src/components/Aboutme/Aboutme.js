import React from 'react'
import './Aboutme.css'
import image from '../assets/gkimage.jpg'


const Aboutme = () => {
  return (
    <div className='about'>
        <div className='about-section'>
        <div className='about-left'>
        <img src={image} alt='Profile image'></img>
        
      
        </div>
       
        <div className='about-right'>
        <div className='about-para'>
            <p>Hi there.. I'm a student with strong foundation in IT pursuing my bachelors degree in Information Technology at Sinhgad College of Engineering, Pune. <br/>
            I am a frontend developer and passionate about learning new skills, exploring new domains.</p>
        </div>
        <div className='about-skills'>
        <div className='about-skill'><p>HTML</p> <hr style={{width:"55%"}}/>
        </div>
        <div className='about-skill'><p>CSS</p> <hr style={{width:"40%"}}/>
        </div>
        <div className='about-skill'><p>JavaScript</p> <hr style={{width:"35%"}}/>
        </div>
        <div className='about-skill'><p>React JS</p> <hr style={{width:"33%"}}/>
        </div>
        <div className='about-skill'><p>BootStrap</p> <hr style={{width:"34%"}}/>
        </div>
        <div className='about-skill'><p>Java</p> <hr style={{width:"37%"}}/>
        </div>
        <div className='about-skill'><p>SQL</p> <hr style={{width:"55%"}}/>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Aboutme
