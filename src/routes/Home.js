import React from 'react'
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import HeroImg from '../components/HeroImg/HeroImg';
import ProjectWork from '../components/ProjectWork/ProjectWork'
import Form from '../components/Form/Form'
import Aboutme from '../components/Aboutme/Aboutme'





const Home = () => {
  return (
    <div>
        <Nav/>
       <Hero/>
       <HeroImg/>
       <Aboutme/>
       <ProjectWork/>
        <Form/>
      
      
      
    </div>
  )
}

export default Home
