import React from 'react'
import HeroImg from '../components/HeroImg/HeroImg'
import Nav from '../components/Nav/Nav'
import ProjectWork from '../components/ProjectWork/ProjectWork'


// import Cards from '../components/Cards/Cards'

const Project = () => {
  return (
    <div>
      <Nav/>
        <HeroImg heading="PROJECT." text="Some of my most recent works" />
  <ProjectWork/>
      
    </div>
  )
}

export default Project
