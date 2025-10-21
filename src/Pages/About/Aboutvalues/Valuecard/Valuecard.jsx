import React from 'react'
import './Valuecard.css'

const Valuecard= ({image, title, text})=>{
    return(
        <div className="valuecard">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Valuecard