// import "./Cards.css"
import ProjectCardData from './ProjectWorkData'
import React from "react"
import Cards from "../Cards/Cards"


const ProjectWork = () => {
  return (
    <div className="container">
        <h1 className="heading" >Projects</h1>
        <div className="content">
          {ProjectCardData.map((val,ind)=>{
            return <Cards key={ind} technologies={val.technologies} title={val.title} text={val.text} link={val.link}/>

          })}
           
        </div>
      
    </div>
  )
}

export default ProjectWork
