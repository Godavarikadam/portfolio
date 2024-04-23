import "./Cards.css"
import React from 'react'

import { NavLink } from "react-router-dom"

const Cards = (props) => {
  return (
    <div className="card">
    <h2 className="title">{props.title}</h2>

    <div className="details">
        <p>{props.text}</p>
        <p > <strong>Key Technologies : </strong>{props.technologies}</p> 
            <NavLink to={props.link} className="links">Link</NavLink>

    </div>
</div>
  )
}

export default Cards
